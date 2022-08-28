import { Match, Switch } from 'solid-js'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { useAuth } from 'solid-firebase';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyASIrKsVwXSRElYnGec7We3Up6YErEnOoQ",
    authDomain: "solid-firebase.firebaseapp.com",
    projectId: "solid-firebase",
    storageBucket: "solid-firebase.appspot.com",
    messagingSenderId: "595768448829",
    appId: "1:595768448829:web:0c88226733e0f81f859754"
};

export const Login = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app)
    const signIn = () => signInWithPopup(auth, new GoogleAuthProvider())
  
    return <button onClick={signIn}>Sign In with Google</button>
}