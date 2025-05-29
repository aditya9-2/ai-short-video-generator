import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "g0-local.firebaseapp.com",
    databaseURL: "https://g0-local-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "g0-local",
    storageBucket: "g0-local.appspot.com",
    messagingSenderId: "983913284884",
    appId: "1:983913284884:web:e8fe4bbd9ad0411209ae01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)