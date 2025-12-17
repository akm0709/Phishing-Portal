# Phishing Awareness Portal

A modern, interactive web-based platform to educate employees about phishing threats and cybersecurity best practices through engaging quizzes and an admin dashboard.

## 🎯 Key Features

- **Interactive Quiz System** - Take phishing awareness quizzes with real-time scoring and detailed feedback
- **Admin Dashboard** - Manage questions, create custom quizzes, and track employee performance
- **Question Navigator** - Split-screen interface with easy question navigation
- **Performance Review** - Color-coded feedback (green for correct, red for incorrect, gray for unattempted)
- **Modern Design** - Glassmorphism effects, responsive layout, professional green color scheme
- **Local Data Storage** - All data stored in browser's localStorage

## 📁 Project Files

```
├── index.html      # Home page with video
├── quiz.html       # Interactive quiz interface
├── admin.html      # Admin dashboard
└── README.md       # This file
```

## 🚀 Quick Start

1. Open `index.html` in your browser
2. Click **"Attempt Quiz Now"** to take the quiz
3. Click **"Admin Dashboard"** to manage questions

## 🔐 Admin Credentials

- **Username**: `admin`
- **Password**: `password`

To change credentials, edit lines 638-639 in `admin.html`:
```javascript
const ADMIN_USERNAME = 'your-username';
const ADMIN_PASSWORD = 'your-password';
```

## 💡 How It Works

**For Employees:**
- Answer 10 phishing awareness questions
- Get immediate feedback on answers
- Review detailed explanations
- Track your score

**For Admins:**
- Create and manage custom questions
- Support single and multiple-correct-answer questions
- View all employee quiz attempts
- Review individual employee responses

## 🎨 Technologies

- HTML5, CSS3, Vanilla JavaScript
- Font Awesome Icons
- LocalStorage for data persistence

## 🌐 Deploy to GitHub

1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Your site will be live at `https://yourusername.github.io/phishing-awareness-portal`

## 📱 Browser Support

Chrome, Firefox, Safari, Edge (latest versions)

---

**Made by [Atharva More](https://www.linkedin.com/in/atharva-more-8118b6283)**

**Stay Aware. Stay Secure. Stop Phishing.**
