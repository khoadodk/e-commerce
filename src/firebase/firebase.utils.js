import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCdbXWfihy-RkdRzaPIuD_p4D4wDUK7bkI",
    authDomain: "crown-db-6e7b2.firebaseapp.com",
    databaseURL: "https://crown-db-6e7b2.firebaseio.com",
    projectId: "crown-db-6e7b2",
    storageBucket: "",
    messagingSenderId: "599344055977",
    appId: "1:599344055977:web:46659973fdc0d89d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;