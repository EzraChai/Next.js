import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDsYsn7uzPW96zruLvRztCEQBqWImlApUY",
    authDomain: "whatsapp2-0-dd531.firebaseapp.com",
    projectId: "whatsapp2-0-dd531",
    storageBucket: "whatsapp2-0-dd531.appspot.com",
    messagingSenderId: "767453988769",
    appId: "1:767453988769:web:5b40d3fd285361c6adade0"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig): firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,provider}