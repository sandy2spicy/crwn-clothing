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
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
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

export const addCollectionAndDocuments = async (collectionName, documentsToAdd) => {
  const collectionRef = firestore.collection(collectionName);
  const batch = firestore.batch();
  documentsToAdd.forEach((documentToAdd) => {
    const docRef = collectionRef.doc();
    batch.set(docRef, documentToAdd);
  });
  return await batch.commit();
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject)=>{
    const onAuthChangeObserver = auth.onAuthStateChanged((user) => {
      onAuthChangeObserver()
      resolve(user);
    }, reject)
  })
}

export const convertCollectionSnapshotToMap = (collection) => {
  const docRefs = collection.docs;
  const transformedData = docRefs.map((docSnapshot) => {
    const {title, items} = docSnapshot.data();
    return {
      title,
      items,
      id: docSnapshot.id,
      routeName: encodeURI(title.toLowerCase())
    }
  })
  return transformedData.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {})
}

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const signInWithGoogle = () => {
  return auth.signInWithPopup(googleProvider);
};
