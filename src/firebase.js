import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAp9ipJoe2tVWnSVEF9pSWYxSARLCK4Qi8",
    authDomain: "upverter-d0bbf.firebaseapp.com",
    databaseURL: "https://upverter-d0bbf.firebaseio.com",
    projectId: "upverter-d0bbf",
    storageBucket: "upverter-d0bbf.appspot.com",
    messagingSenderId: "15780240132"
  };

/**
 * Inicializing firebase
 */
firebase.initializeApp(config);

export default firebase;