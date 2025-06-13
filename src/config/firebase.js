import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyBpbrdZouNqJfrexmy3FDl-Dryir85fGXE",
  authDomain: "jiya-chauhan.firebaseapp.com",
  projectId: "jiya-chauhan",
  storageBucket: "jiya-chauhan.firebasestorage.app",
  messagingSenderId: "144545592815",
  appId: "1:144545592815:web:f7fd7852ecd5cae49b721a",
  measurementId: "G-M4L4HX4Q02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics, logEvent }; 