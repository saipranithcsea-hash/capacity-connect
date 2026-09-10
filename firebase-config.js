import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAr8dsIm0foXvuBVE8ml72GbvXMpCmYtFs",
    authDomain: "capacity-connect-26b3f.firebaseapp.com",
    projectId: "capacity-connect-26b3f",
    storageBucket: "capacity-connect-26b3f.firebasestorage.app",
    messagingSenderId: "879429304055",
    appId: "1:879429304055:web:42c50c6ae88dffcc671df2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };