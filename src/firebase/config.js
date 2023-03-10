import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAsLdrnJiVNrYQax7moUrPgUkSSrnVnu2Q",
    authDomain: "olx-clone-1d97b.firebaseapp.com",
    projectId: "olx-clone-1d97b",
    storageBucket: "olx-clone-1d97b.appspot.com",
    messagingSenderId: "517629200973",
    appId: "1:517629200973:web:5de7c38cdbf0286f1aea04",
    measurementId: "G-VR2EKDCPBR"
  };

export default firebase.initializeApp(firebaseConfig)