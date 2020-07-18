import firebase from 'firebase';
import 'firebase/auth';

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyBoUEnqKqPhskN938j9iPngvQT0AWf0g-s",
  authDomain: "pro-organiser-app-25.firebaseapp.com",
  databaseURL: "https://pro-organiser-app-25.firebaseio.com",
  projectId: "pro-organiser-app-25",
  storageBucket: "pro-organiser-app-25.appspot.com",
  messagingSenderId: "330105416521",
  appId: "1:330105416521:web:ff0d97d8d82db367e4c898",
  measurementId: "G-7YT5E1SZEK"
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();