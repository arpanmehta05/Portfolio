import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Load and process HTML email templates
 */
export class EmailTemplates {
  static async loadTemplate(templateName) {
    try {
      const templatePath = path.join(
        __dirname,
        "templates",
        `${templateName}.html`
      );
      const htmlContent = fs.readFileSync(templatePath, "utf8");
      return htmlContent;
    } catch (error) {
      console.error(`Error loading template ${templateName}:`, error);
      throw new Error(`Template ${templateName} not found`);
    }
  }

  /**
   * Generate confirmation email HTML
   */
  static async generateConfirmationEmail(userData) {
    const template = await this.loadTemplate("confirmation");

    return template
      .replace(/{{USER_NAME}}/g, userData.name)
      .replace(/{{USER_SUBJECT}}/g, userData.subject)
      .replace(/{{USER_MESSAGE}}/g, userData.message)
      .replace(/{{CURRENT_YEAR}}/g, new Date().getFullYear());
  }

  /**
   * Generate notification email HTML
   */
  static async generateNotificationEmail(userData) {
    const template = await this.loadTemplate("notification");

    const fullTimestamp = new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    });

    return template
      .replace(/{{CONTACT_NAME}}/g, userData.name)
      .replace(/{{CONTACT_EMAIL}}/g, userData.email)
      .replace(/{{CONTACT_SUBJECT}}/g, userData.subject)
      .replace(/{{CONTACT_MESSAGE}}/g, userData.message)
      .replace(/{{FULL_TIMESTAMP}}/g, fullTimestamp)
      .replace(/{{CURRENT_YEAR}}/g, new Date().getFullYear());
  }

  /**
   * Generate both email templates
   */
  static async generateEmailTemplates(userData) {
    try {
      const [confirmationHtml, notificationHtml] = await Promise.all([
        this.generateConfirmationEmail(userData),
        this.generateNotificationEmail(userData),
      ]);

      return {
        confirmation: confirmationHtml,
        notification: notificationHtml,
      };
    } catch (error) {
      console.error("Error generating email templates:", error);
      throw error;
    }
  }
}
