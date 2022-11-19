import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import config from './config';

const Firebase = firebase.initializeApp(config.firebase);

// Add or Remove authentification methods here.
export const Providers = {
    google: new firebase.auth.GoogleAuthProvider(),
};

export const auth = firebase.auth();

export default Firebase;