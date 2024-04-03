/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// require("dotenv").config();

const firebaseConfig = {
  apiKey: "AIzaSyBD3knHdKJ_l5GJA1YzTQbteF6PHjYSDtU",
  authDomain: "miniblog-11bb5.firebaseapp.com",
  projectId: "miniblog-11bb5",
  storageBucket: "miniblog-11bb5.appspot.com",
  messagingSenderId: "534391900003",
  appId: "1:534391900003:web:2f23a709779c07f03f7556",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
