import firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"

var firebaseConfig = {
     apiKey: "AIzaSyCbMCvKvf215AQaUlcAVIZ7KyAxxEoTAqU",
     authDomain: "housing-coopnet.firebaseapp.com",
     databaseURL: "https://housing-coopnet.firebaseio.com",
     projectId: "housing-coopnet",
     storageBucket: "housing-coopnet.appspot.com",
     messagingSenderId: "183700312280",
     appId: "1:183700312280:web:15970b742b76e46b"
};

firebase.initializeApp(firebaseConfig);
export default firebase;

