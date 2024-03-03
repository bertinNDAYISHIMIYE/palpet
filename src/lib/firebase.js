import firebase from 'firebase/compat/app'; // Use 'compat' for version 9 and above
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAMGOFb8wtgSaSLtE5QsdQJh3h-e2hQbTo",
  authDomain: "palpet-c6c74.firebaseapp.com",
  projectId: "palpet-c6c74",
  storageBucket: "palpet-c6c74.appspot.com",
  messagingSenderId: "202577010214",
  appId: "1:202577010214:web:d5b50252f80502870a90e7"
};

// Check if Firebase is not initialized, then initialize it
if (!firebase.apps.length) {
  try {
    firebase.initializeApp(firebaseConfig);
  } catch (error) {
    console.error('Firebase initialization error', error.stack);
  }
}

export const firestore = firebase.firestore();
export const storage = firebase.storage();
