import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCVnpMZ20mJmIhx39Wqk_YaeBFOQzORiX4",
    authDomain: "facebook-5e3a6.firebaseapp.com",
    projectId: "facebook-5e3a6",
    storageBucket: "facebook-5e3a6.appspot.com",
    messagingSenderId: "695552081656",
    appId: "1:695552081656:web:e45ce4507d77f8f33a850d",
    measurementId: "G-E7H7BCVW3X"
  };
// firebase.initializeApp(firebaseConfig);
// export const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });

// export const signInWithGoogle = () => auth.signInWithPopup(provider);

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
 const auth = firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

export { provider, auth };
export default db;
  