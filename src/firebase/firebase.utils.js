import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPQf7wZuha9e1pF6ZkLAaxOeIhaW6Juo8",
  authDomain: "crwn-db-862ae.firebaseapp.com",
  projectId: "crwn-db-862ae",
  storageBucket: "crwn-db-862ae.appspot.com",
  messagingSenderId: "878740694203",
  appId: "1:878740694203:web:1b98e181a02f96aec7759e",
  measurementId: "G-CK1PTXJCH4",
};

firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if(!userAuth) return;
   const userRef = firestore.doc(`/users/${userAuth.uid}`);
   const snapShot = await userRef.get();
   if(!snapShot.exists) {
     const {displayName, email} = userAuth;
     const createdDate = new Date();
     try {
      await userRef.set({
        displayName, email, createdDate, ...additionalData
       });
     } catch (error) {
       console.log(error.message);
     }
     
   }
   return userRef;
}

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
};
