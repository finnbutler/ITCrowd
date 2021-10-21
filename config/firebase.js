import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import Constants from "expo-constants";
// Initialize the Firebase taken from firebase expo docs
const firebaseConfig = {
  apiKey: "AIzaSyAXqjPWQ5FBL5Ere2yBCafdvXPwQS6llSM",
  authDomain: "deco3801-91e98.firebaseapp.com",
  projectId: "deco3801-91e98",
  storageBucket: "deco3801-91e98.appspot.com",
  messagingSenderId: "372766421375",
  appId: "1:372766421375:web:e092a8c4883270628a6a4a",
};
let Firebase;
if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}
export default Firebase;
