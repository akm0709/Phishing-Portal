# 🛡️ Phishing Awareness Portal

An interactive, modern web-based training platform designed to educate employees about phishing threats, email security, and best practices for identifying and avoiding malicious emails and suspicious online activities.

🔗 **[Live Demo](https://phishing-portal-beta.vercel.app/)**

![Phishing Portal](https://img.shields.io/badge/Security%20Training-Active-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Status](https://img.shields.io/badge/Status-Production%20Ready-success)

---

## ✨ Features

- **Interactive Quiz Platform** - Engaging assessments with real-time feedback
- **Multiple Question Types** - Single-answer and multiple-choice questions
- **Instant Scoring** - Immediate results with pass/fail indicators (70% passing score)
- **Detailed Review** - Comprehensive feedback on all answers with explanations
- **Question Navigator** - Visual navigation showing attempt status per question
- **Admin Dashboard** - Real-time monitoring of employee quiz attempts
- **Cloud Synchronization** - Firebase Cloud Firestore for multi-device access
- **Responsive Design** - Fully functional on desktop, tablet, and mobile devices
- **Employee Analytics** - Tracking and visualization of training completion
- **Offline Fallback** - localStorage backup ensures functionality without cloud connectivity
- **Modern UI** - Glassmorphism design with smooth animations

---

## 🚀 Live Demo

**🎯 Try it now:** https://phishing-portal-beta.vercel.app/

- **Home Page** - Learn about phishing threats with interactive content
- **Quiz** - Take the 10-question assessment (no login required)
- **Admin Dashboard** - View submissions and employee progress

---

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js 14+ (for local development only)
- Git (for cloning the repository)

### Installation

1. **Try the Live Demo First**
   - Visit: https://phishing-portal-beta.vercel.app/
   - No setup required - start taking the quiz immediately!

2. **Clone for Self-Hosting**
   ```bash
   git clone https://github.com/yourusername/phishing-awareness-portal.git
   cd phishing-awareness-portal
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your Firebase credentials
   ```

4. **Deploy to Vercel** (Recommended)
   - Connect your GitHub repo to [Vercel](https://vercel.com)
   - Add environment variables in Vercel dashboard
   - Deploy with one click

5. **Or run locally**
   ```bash
   python -m http.server 8000
   # Visit http://localhost:8000
   ```

---

## 📁 File Structure

```
phishing-awareness-portal/
├── index.html              # Home page with video embed
├── quiz.html               # Main quiz platform
├── admin.html              # Employee tracking dashboard
├── firebase.js             # Firebase configuration
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
└── README.md               # Documentation
```

---

## 🎯 How It Works

### For Employees

1. **Access the Portal** - Open `index.html` in your browser
2. **Start Quiz** - Click "Take Quiz" and enter your employee information
3. **Answer Questions** - Select answers for 10 security awareness questions
4. **Submit & Review** - Get instant feedback and review all answers
5. **Pass Requirement** - Achieve 70% or higher to pass

### For Administrators

1. **Access Dashboard** - Open `admin.html`
2. **View Attempts** - See all employee quiz submissions in real-time
3. **Review Details** - Click on any employee to view detailed response analysis
4. **Track Progress** - Monitor completion rates and scores across teams

---

## 🔐 Security & Privacy

- **No Personal Data Storage** - Only job-related information is collected
- **Secure Connection** - Use HTTPS for all deployments
- **Firestore Security Rules** - Configured to allow controlled access
- **Password Protection** - Admin dashboard requires authentication
- **Data Encryption** - Firestore encrypts data at rest and in transit

---

## 🛠️ Configuration

### Environment Variables

Create a `.env.local` file with:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

⚠️ **Important**: Never commit `.env.local` to git. Use `.env.example` as a template for your team.

---

## 📊 Deployment

### Current Deployment

- **Live URL:** https://phishing-portal-beta.vercel.app/
- **Platform:** Vercel
- **Status:** Active ✅
- **Database:** Firebase Cloud Firestore
- **Last Updated:** December 2025

### Deploy Your Own Version

#### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel Dashboard
4. Deploy

#### Other Platforms

- **Netlify** - Connect GitHub repo, add env vars, deploy
- **GitHub Pages** - Limited (no backend API support)
- **Self-hosted** - Deploy to your own server with Node.js

---

## 🎨 Customization

### Add Custom Questions

Edit the `questions` array in `quiz.html`:

```javascript
const questions = [
  {
    q: "Your custom question here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    answer: 0  // Index of correct answer
  },
  // Add more questions...
];
```

### Change Passing Score

Modify the passing threshold in `quiz.html`:

```javascript
const isPassed = percentage >= 70;  // Change 70 to your desired percentage
```

### Customize Branding

- Edit colors in the `<style>` section
- Update company name and logos
- Modify success/failure messages

---

## 📈 Analytics & Reporting

The admin dashboard provides:

- **Total Attempts** - Number of quiz submissions
- **Pass Rate** - Percentage of passing scores
- **Average Score** - Mean score across all attempts
- **Employee Tracking** - Individual performance history
- **Question Analysis** - Most commonly missed questions

---

## 🐛 Troubleshooting

### Quiz data not saving to Firebase?
- Check `.env.local` contains correct Firebase credentials
- Verify Firestore security rules allow `create` access
- Check browser console (F12) for error messages

### Admin dashboard not loading data?
- Ensure you have authenticated with correct credentials
- Verify Firebase rules allow `read` access to `quizAttempts`
- Check that quiz attempts exist in Firestore

### Deployment failed?
- Verify all files are in git (check `.gitignore`)
- Ensure environment variables are set in deployment platform
- Check deployment logs for specific error messages

---

## 📞 Support

For issues or questions:

1. Check the [Troubleshooting](#troubleshooting) section
2. Review Firebase documentation: https://firebase.google.com/docs
3. Check console logs (F12) for error details
4. Open an issue on GitHub

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🔄 Updates & Maintenance

This portal is actively maintained. Check back regularly for:

- Security updates
- New question templates
- UI/UX improvements
- Bug fixes
- Performance optimizations

---

## ⚡ Performance Tips

- Use Chrome DevTools to monitor loading times
- Compress images before adding to questions
- Enable browser caching in deployment
- Use CDN for Firebase SDK

---

## 📚 Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Phishing Prevention Tips](https://www.sans.org/reading-room/whitepapers/)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
- [Web Security Best Practices](https://owasp.org/)

---

## 🎓 Learning Outcomes

After completing this training, employees will understand:

- ✓ What constitutes a phishing email
- ✓ How to verify suspicious links
- ✓ Best practices for password security
- ✓ When to contact IT support
- ✓ How to report suspicious activity
- ✓ Importance of multi-factor authentication

---

**Last Updated:** December 2025  
**Version:** 1.0.0  
**Deployed:** https://phishing-portal-beta.vercel.app/  
**Status:** Production Ready ✅
