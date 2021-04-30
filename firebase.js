import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBY_ulUMgpYQNp8cbFLjY9UUFWEdfW9P9k",
    authDomain: "disk-jockey-773f0.firebaseapp.com",
    databaseURL: "https://disk-jockey-773f0-default-rtdb.firebaseio.com",
    projectId: "disk-jockey-773f0",
    storageBucket: "disk-jockey-773f0.appspot.com",
    messagingSenderId: "1072883113287",
    appId: "1:1072883113287:web:e8f29a9cf344e8b5cec062",
    measurementId: "G-W0D36R015K"
};

firebase.initializeApp(firebaseConfig);

export default firebase;