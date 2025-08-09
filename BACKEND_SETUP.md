# Custom Backend Email System Setup

## Overview

This is a custom Node.js backend that handles:

1. **Confirmation emails** sent to users from `arpanmehta05@gmail.com`
2. **Notification emails** sent to your secondary email when someone contacts you
3. **Professional email templates** with proper formatting
4. **Rate limiting** to prevent spam
5. **Input validation** and security features

## Setup Instructions

### 1. Gmail App Password Setup

1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled
3. Go to "Security" → "App passwords"
4. Generate a new app password for "Mail"
5. Copy the 16-character password (remove spaces)

### 2. Configure Backend Environment

Edit `backend/.env` file with your actual credentials:

```env
# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=arpanmehta05@gmail.com
EMAIL_PASS=your_16_character_app_password
NOTIFICATION_EMAIL=your_notification_email@gmail.com

# Server Configuration
PORT=5000
FRONTEND_URL=http://localhost:5174

# Security
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX=5
```

**Replace:**

- `your_16_character_app_password` - Your Gmail app password
- `your_notification_email@gmail.com` - Your secondary email for notifications

### 3. Start the Backend Server

```bash
# Navigate to backend folder
cd backend

# Install dependencies (already done)
npm install

# Start development server
npm run dev

# Or start production server
npm start
```

### 4. Start Frontend

In a new terminal:

```bash
# Navigate back to main folder
cd ..

# Start frontend
npm run dev
```

## Email Flow

### When someone submits the contact form:

1. **User receives confirmation email** from `arpanmehta05@gmail.com`:

   - Professional template with your branding
   - Confirms you received their message
   - Includes their message details
   - Your contact information

2. **You receive notification email** at your secondary email:
   - Contains all user details (name, email, subject, message)
   - Formatted for easy reading
   - Direct reply button to respond to the user
   - Timestamp of submission

## Features

✅ **Professional Email Templates**

- HTML formatted emails
- Responsive design
- Your branding and contact info

✅ **Security Features**

- Rate limiting (5 requests per 15 minutes per IP)
- Input validation
- CORS protection
- Helmet security headers

✅ **Error Handling**

- Proper HTTP status codes
- User-friendly error messages
- Server-side validation

✅ **Development Features**

- Nodemon for auto-restart during development
- Environment variable configuration
- Health check endpoint

## Testing

1. Fill out the contact form on your website
2. Check if the backend console shows "Email server is ready"
3. Verify both emails are sent:
   - User gets confirmation from `arpanmehta05@gmail.com`
   - You get notification at your secondary email

## Troubleshooting

**"Email configuration error":**

- Check your Gmail app password
- Ensure 2FA is enabled on your Google account
- Verify the EMAIL_USER and EMAIL_PASS in .env

**"CORS error":**

- Make sure FRONTEND_URL matches your frontend URL
- Check if both servers are running

**"Rate limit exceeded":**

- Wait 15 minutes or restart the backend server
- Adjust RATE_LIMIT_MAX in .env if needed

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check

The backend is now ready to handle your contact form professionally! 🚀
