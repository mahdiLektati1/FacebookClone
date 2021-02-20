import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNTXd7-IYFjnMUvhViwXowItpe15cecXA",
  authDomain: "facebook-clone-a42fd.firebaseapp.com",
  projectId: "facebook-clone-a42fd",
  storageBucket: "facebook-clone-a42fd.appspot.com",
  messagingSenderId: "5860423798",
  appId: "1:5860423798:web:32f582f3c149ce3a748757",
  measurementId: "G-YYNXVTZXSM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db          = firebaseApp.firestore();
const auth        = firebase.auth();
const provider    = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;