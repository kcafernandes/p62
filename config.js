import firebase from "firebase";

//initialize your database
var firebaseConfig = {
  apiKey: "AIzaSyBwyJREsNcjZF-0frINETXAwBFapoobY6Q",
  authDomain: "schoolattendanceapp-8b14b.firebaseapp.com",
  projectId: "schoolattendanceapp-8b14b",
  storageBucket: "schoolattendanceapp-8b14b.appspot.com",
  messagingSenderId: "401874952682",
  appId: "1:401874952682:web:9aacb44c28e94e94ed9293"
};

firebase.initializeApp(firebaseConfig);

  export default firebase.database()
 

  