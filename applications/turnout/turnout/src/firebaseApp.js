import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCIJD_KhdzHuqUukA5XZAJpl76UVyLW9yk",
  authDomain: "timekeeper-8ca6d.firebaseapp.com",
  databaseURL: "https://timekeeper-8ca6d.firebaseio.com",
  projectId: "timekeeper-8ca6d",
  storageBucket: "timekeeper-8ca6d.appspot.com",
  messagingSenderId: "286894429521",
  appId: "1:286894429521:web:8d7a403a6f742c84a5ef70"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)
