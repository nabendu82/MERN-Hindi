import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA_-cW3URoobb4cPH07QlKIMzv6qoIS0vc",
    authDomain: "tinder-firebase-skygoal.firebaseapp.com",
    projectId: "tinder-firebase-skygoal",
    storageBucket: "tinder-firebase-skygoal.appspot.com",
    messagingSenderId: "780306896000",
    appId: "1:780306896000:web:3c45f29365a116edf9c265"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db