import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAg6xS_jUKWFCyFlfunpt1fn85RACU2JWQ",
  authDomain: "netflix-clone-b0048.firebaseapp.com",
  projectId: "netflix-clone-b0048",
  storageBucket: "netflix-clone-b0048.appspot.com",
  messagingSenderId: "266668570382",
  appId: "1:266668570382:web:48fba73401a3386957095f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;