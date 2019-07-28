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


// Store the user's info into the database
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('Error creating user', error.message);
        }
    }
    return userRef;
};

// Set up Google OAuth
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;