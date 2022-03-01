import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyCQ4zQ68-cYl5fyf09JxY55i_BwMzoYPLA",
    authDomain: "shopping-8cbfa.firebaseapp.com",
    projectId: "shopping-8cbfa",
    storageBucket: "shopping-8cbfa.appspot.com",
    messagingSenderId: "324047470381",
    appId: "1:324047470381:web:ef9be18c717739ad999da4",
    measurementId: "G-YD6GLPD2K6"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;
 
   const userRef = firestore.collection('users').doc(userAuth.uid);
 
   const snapShop = await userRef.get();
 
   if (!snapShop.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
 
      try {
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData,
         });
 
         console.log('user creation successfull.');
      } catch (error) {
         console.log('Error creating user', error.message);
      }
   }
 
   return userRef;
};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}

export default firebase;