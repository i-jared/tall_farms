import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13/firebase-app.js";
import {
  getAnalytics,
  setAnalyticsCollectionEnabled,
} from "https://www.gstatic.com/firebasejs/10.13/firebase-analytics.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.13/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAGaa_-Dt7MBjD1a7Yn-xrd-faxlpL1ZBY",
  authDomain: "tall-farms.firebaseapp.com",
  projectId: "tall-farms",
  storageBucket: "tall-farms.appspot.com",
  messagingSenderId: "919020867023",
  appId: "1:919020867023:web:e09d1c73087f3232ab56ba",
  measurementId: "G-VY7M8YK7SF",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

setAnalyticsCollectionEnabled(analytics, true);

export function sendMessage(data) {
  data.timestamp = new Date().toISOString();

  addDoc(collection(firestore, "messages"), data)
    .then((_) => {
      alert("Message sent successfully!");
      this.reset();
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      alert("An error occurred. Please try again.");
    });
}

