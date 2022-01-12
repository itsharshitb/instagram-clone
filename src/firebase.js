import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCyem8gbcK30Gl2VgCnjY2_rCrCMW_9u9g",
    authDomain: "instagram-clone-react-e5ba9.firebaseapp.com",
    projectId: "instagram-clone-react-e5ba9",
    storageBucket: "instagram-clone-react-e5ba9.appspot.com",
    messagingSenderId: "213409668996",
    appId: "1:213409668996:web:9d3888c2d10b729d3cc7d1",
    measurementId: "G-ZFM5EQ82NK"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};