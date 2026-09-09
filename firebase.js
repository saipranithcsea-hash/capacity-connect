import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAFCKotf_fYJkcppIOooTP38-SrIdwq-Q",
    authDomain: "capacity-connect-e449a.firebaseapp.com",
    projectId: "capacity-connect-e449a",
    storageBucket: "capacity-connect-e449a.firebasestorage.app",
    messagingSenderId: "1063675753511",
    appId: "1:1063675753511:web:fcdb92cf6a22532f578a02",
    measurementId: "G-8WDZ6B3JD9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };