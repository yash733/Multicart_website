import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAGNbzDmhqVKKCmgfwdsUhCM8w8Z90up0I',
  authDomain: 'clone-a8675.firebaseapp.com',
  projectId: 'clone-a8675',
  storageBucket: 'clone-a8675.appspot.com',
  messagingSenderId: '517718262766',
  appId: '1:517718262766:web:6bcd936eb9c76b332344ff',
  measurementId: 'G-R3E3XD63JL',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
