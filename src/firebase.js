import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC74Zf5gVfZMhB2_dk_FdP-N3UphFPPVL8",
  authDomain: "login-bd550.firebaseapp.com",
  projectId: "login-bd550",
  storageBucket: "login-bd550.appspot.com",
  messagingSenderId: "365180224141",
  appId: "1:365180224141:web:1bb686bf3001d41dc998c4",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);


export default fire;
