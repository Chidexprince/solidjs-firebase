/* @refresh reload */
import { render } from 'solid-js/web';
import { FirebaseProvider } from 'solid-firebase'
import { Router } from "solid-app-router";

import './index.css';
import App from './App';

const firebaseConfig = {
    apiKey: "AIzaSyASIrKsVwXSRElYnGec7We3Up6YErEnOoQ",
    authDomain: "solid-firebase.firebaseapp.com",
    projectId: "solid-firebase",
    storageBucket: "solid-firebase.appspot.com",
    messagingSenderId: "595768448829",
    appId: "1:595768448829:web:0c88226733e0f81f859754"
};

render(() => (
    <FirebaseProvider config={firebaseConfig}>
        <Router>
            <App />
        </Router>
    </FirebaseProvider>
), document.getElementById('root'));
