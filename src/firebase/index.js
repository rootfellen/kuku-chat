// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAl0JkeRTT_gOu--1pzEM9PUKtz3KomR5g",
  authDomain: "kuku-chat.firebaseapp.com",
  projectId: "kuku-chat",
  storageBucket: "kuku-chat.appspot.com",
  messagingSenderId: "136900266382",
  appId: "1:136900266382:web:2a5e71dfcc9a0ed03abcdf",
  measurementId: "G-FEQNSE05CC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
