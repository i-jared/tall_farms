import { initializeApp } from "firebase/app";
import {
  getAnalytics,
  setAnalyticsCollectionEnabled,
} from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

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
setAnalyticsCollectionEnabled(analytics, true);

const firestore = getFirestore(app);

setAnalyticsCollectionEnabled(analytics, true);

export async function sendMessage(data) {
  data.timestamp = new Date().toISOString();

  try {
    await addDoc(collection(firestore, "messages"), data);
    alert("Message sent successfully!");
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("An error occurred. Please try again.");
  }
}
