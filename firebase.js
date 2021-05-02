import firebase from "firebase/app";
import "firebase/database";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCMzFInbNbSn9hEQea1UfUV0HaznYd05UM",
    authDomain: "scheduler-1f4e7.firebaseapp.com",
    databaseURL: "https://scheduler-1f4e7-default-rtdb.firebaseio.com",
    projectId: "scheduler-1f4e7",
    storageBucket: "scheduler-1f4e7.appspot.com",
    messagingSenderId: "917311334471",
    appId: "1:917311334471:web:806f31a26a932c12dde962",
    measurementId: "G-G0PXE1GMRK"
};

firebase.initializeApp(firebaseConfig);

export default firebase;