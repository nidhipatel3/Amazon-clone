import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO2EHAll3QUyyVS5KUizIeH11ooFxBdOE",
  authDomain: "challenge-94597.firebaseapp.com",
  databaseURL: "https://challenge-94597.firebaseio.com",
  projectId: "challenge-94597",
  storageBucket: "challenge-94597.appspot.com",
  messagingSenderId: "888383304387",
  appId: "1:888383304387:web:b7ad677fb5c2715de7a876",
  measurementId: "G-T90BLWQHDF",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
