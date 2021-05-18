import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB9sY3nSUvHhO-x-BALLcF03dY6V9VyYZY",
  authDomain: "productapp-fee3b.firebaseapp.com",
  projectId: "productapp-fee3b",
  storageBucket: "productapp-fee3b.appspot.com",
  messagingSenderId: "654512245790",
  appId: "1:654512245790:web:bfb07a81ee42ebd0c2f20f",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const firedb = firebase.database();

export { db, firedb };
