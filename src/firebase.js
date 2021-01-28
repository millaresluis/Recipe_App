import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA-3GJtU0Xtf2HSkErJi_CkIogcuzWZ2UQ",
    authDomain: "recipe-app-993f0.firebaseapp.com",
    projectId: "recipe-app-993f0",
    storageBucket: "recipe-app-993f0.appspot.com",
    messagingSenderId: "481348081989",
    appId: "1:481348081989:web:8afa6602d220c2565e462c"
  };


const fire = firebase.initializeApp(firebaseConfig);


export default fire;
