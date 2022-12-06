import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMzh3yaKbWSS_FSSoridv1m4v5No7FRG0",
  authDomain: "journal-isp.firebaseapp.com",
  projectId: "journal-isp",
  storageBucket: "journal-isp.appspot.com",
  messagingSenderId: "157214100890",
  appId: "1:157214100890:web:66ddafb601122739407e23",
  measurementId: "G-Z0R01MG4X3",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
