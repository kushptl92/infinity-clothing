import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
  apiKey: "AIzaSyDhM6UTThdG2lW4n1Zo1l_nwa0O5PnOMcw",
  authDomain: "infinity-db.firebaseapp.com",
  databaseURL: "https://infinity-db.firebaseio.com",
  projectId: "infinity-db",
  storageBucket: "infinity-db.appspot.com",
  messagingSenderId: "116728977531",
  appId: "1:116728977531:web:771d9bf9b4fbde00"
  };

  firebase.initializeApp(config);
export const createUserProfileDocument= async (userAuth, additonalData) => {
  if(!userAuth) return;
  const userRef =firestore.doc(`Users/${userAuth.uid}`);
  const snapShot= await userRef.get();
  if(!snapShot.exists){
    const{ displayName, email }= userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additonalData
      })
    }
    catch(error)
    {
      console.log(error.message);
    }

    }
    return userRef;
}

export const getUserCartRef = async userId => {
  const cartsRef = firestore.collection('carts').where('userId', '==', userId);
  const snapShot = await cartsRef.get();

  if (snapShot.empty) {
    const cartDocRef = firestore.collection('carts').doc();
    await cartDocRef.set({ userId, cartItems: [] });
    return cartDocRef;
  } else {
    return snapShot.docs[0].ref;
  }
};

export const addCollectionAndDocuments= async ( collectionKey, objectsToAdd) =>{
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);
  const batch = firestore.batch();
  objectsToAdd.forEach( obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionSnapshotToMap = (collection) => {
  const transformCollection = collection.docs.map(doc => {
    const { title, items } = doc.data();
    return{
      reoutName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
      }
  });
  return transformCollection.reduce((accumulator, collection) =>{
    accumulator[collection.title.toLowerCase()]= collection;
    return accumulator;
  } ,{ });
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  });
};

  export const auth= firebase.auth();
  export const firestore =firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();

  googleProvider.setCustomParameters({ prompt : 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;

