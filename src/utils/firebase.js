import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "COPY_PASTE_HERE_OR_REPLACE_OBJECT",
  authDomain: "COPY_PASTE_HERE_OR_REPLACE_OBJECT",
  databaseURL: "COPY_PASTE_HERE_OR_REPLACE_OBJECT",
  projectId: "COPY_PASTE_HERE_OR_REPLACE_OBJECT",
  storageBucket: "COPY_PASTE_HERE_OR_REPLACE_OBJECT",
  messagingSenderId: "COPY_PASTE_HERE_OR_REPLACE_OBJECT",
  appId: "COPY_PASTE_HERE_OR_REPLACE_OBJECT",
  measurementId: "COPY_PASTE_HERE_OR_REPLACE_OBJECT",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
