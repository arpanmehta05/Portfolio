import React from "react";
import LinkedInIcon from "./icons/LinkedInIcon";
import GitHubIcon from "./icons/GitHubIcon";
import EmailIcon from "./icons/EmailIcon";
import LeetCodeIcon from "./icons/LeetCodeIcon";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Arpan Mehta</h3>
            <p className="text-gray-300 mb-4">
              Full-Stack Developer passionate about creating innovative web
              applications and solving complex problems through code.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/arpan-mehta-ba113228b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/arpanmehta05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://leetcode.com/u/arpanmehta05/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <LeetCodeIcon />
              </a>
              <a
                href="mailto:arpanmehta05@gmail.com"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <EmailIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("about")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("experience")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("skills")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>Phone: +91 9896897266</p>
              <p>Email: arpanmehta05@gmail.com</p>
              <p>Location: Chandigarh, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Arpan Mehta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
