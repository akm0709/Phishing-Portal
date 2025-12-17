// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
// Uses environment variables (loaded from .env.local or Vercel dashboard)
const firebaseConfig = {
  apiKey: typeof VITE_FIREBASE_API_KEY !== 'undefined' ? VITE_FIREBASE_API_KEY : "AIzaSyDm8dzot-DPuVEfHJNsCrd6Ha3TzQzjAOc",
  authDomain: typeof VITE_FIREBASE_AUTH_DOMAIN !== 'undefined' ? VITE_FIREBASE_AUTH_DOMAIN : "phishing-portal-db.firebaseapp.com",
  projectId: typeof VITE_FIREBASE_PROJECT_ID !== 'undefined' ? VITE_FIREBASE_PROJECT_ID : "phishing-portal-db",
  storageBucket: typeof VITE_FIREBASE_STORAGE_BUCKET !== 'undefined' ? VITE_FIREBASE_STORAGE_BUCKET : "phishing-portal-db.firebasestorage.app",
  messagingSenderId: typeof VITE_FIREBASE_MESSAGING_SENDER_ID !== 'undefined' ? VITE_FIREBASE_MESSAGING_SENDER_ID : "378598506992",
  appId: typeof VITE_FIREBASE_APP_ID !== 'undefined' ? VITE_FIREBASE_APP_ID : "1:378598506992:web:2f3ae28d5807cf29995d35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Custom Questions Functions
async function saveCustomQuestionsToFirebase(questions) {
  try {
    await setDoc(doc(db, "portalConfig", "customQuestions"), {
      questions: questions,
      updatedAt: new Date().toISOString()
    });
    console.log("✅ Custom questions saved to Firebase");
    return true;
  } catch (error) {
    console.error("❌ Error saving custom questions:", error);
    throw error;
  }
}

async function fetchCustomQuestionsFromFirebase() {
  try {
    const configDoc = doc(db, "portalConfig", "customQuestions");
    const response = await getDocs(query(collection(db, "portalConfig")));
    let questions = [];
    response.forEach(doc => {
      if (doc.id === "customQuestions" && doc.data().questions) {
        questions = doc.data().questions;
      }
    });
    console.log("✅ Custom questions fetched from Firebase:", questions.length);
    return questions;
  } catch (error) {
    console.error("❌ Error fetching custom questions:", error);
    return [];
  }
}

// Export the database and tools so other files can use them
export { db, collection, addDoc, getDocs, query, orderBy, saveCustomQuestionsToFirebase, fetchCustomQuestionsFromFirebase };
