import firebase from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signOut,
  signInWithEmailAndPassword,
  } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, setDoc , doc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDdxhuZHjGD21T435N70yXes3DM-1i82z4",
  authDomain: "project-d9696.firebaseapp.com",
  projectId: "project-d9696",
  storageBucket: "project-d9696.appspot.com",
  messagingSenderId: "480813721037",
  appId: "1:480813721037:web:bd5f174dbaf1fe26351084",
  measurementId: "G-7V8WSYNYBF"
};

const app = initializeApp(firebaseConfig);
const appAuth = getAuth();
const db = getFirestore();

const signWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(appAuth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(appAuth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      contact: "",
      location: "",
      profpicUrl: "",
      hobbies: [],
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// const sendPasswordResetEmail = async (email) => {
//   try {
//     await appAuth.sendPasswordResetEmail(email);
//     alert("Password reset link sent!");
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

const logout = () => {
  signOut(appAuth);
};

export {
  appAuth,
  db,
  signWithEmailAndPassword,
  registerWithEmailAndPassword,
  // sendPasswordResetEmail,
  logout,
};