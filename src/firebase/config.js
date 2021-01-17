
import * as firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBCQOmSESe0FAE-8KtIzbE8h0SMeZefxW8",
    authDomain: "mtea-gallery-app.firebaseapp.com",
    projectId: "mtea-gallery-app",
    storageBucket: "mtea-gallery-app.appspot.com",
    messagingSenderId: "597342719994",
    appId: "1:597342719994:web:4f0107dbdc6d3f1f389e43",
    measurementId: "G-KNXX4C89CN"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // Making our storage service
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  // Exporting to use in future files 
  export { projectStorage, projectFirestore};