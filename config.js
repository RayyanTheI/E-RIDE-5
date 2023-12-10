import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDZn9jhnSsCRu1vaPtcyJVTi55_ZAqUsHA",
  authDomain: "e-ride-22b31.firebaseapp.com",
  projectId: "e-ride-22b31",
  storageBucket: "e-ride-22b31.appspot.com",
  messagingSenderId: "776885746242",
  appId: "1:776885746242:web:f583f85f78276b9f550bdb"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
