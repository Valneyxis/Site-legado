// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCR1XebVit1Af8ZCO0Z62t9es8-eZ8hHnM",
    authDomain: "expresso-jeri-120e4.firebaseapp.com",
    projectId: "expresso-jeri-120e4",
    storageBucket: "expresso-jeri-120e4.firebasestorage.app",
    messagingSenderId: "775094062041",
    appId: "1:775094062041:web:73b7540cca5c75872b67c8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
