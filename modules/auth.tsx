import firebase from 'firebase/compat/app';
import { auth } from '../config/firebase';


export const SignInWithEmail = (email : string, pass: string) =>
    new Promise<firebase.auth.UserCredential>((resolve, reject) => {
        console.log(email, pass);
        auth.signInWithEmailAndPassword(email, pass)
            .then(result => resolve(result))
            .catch(error => reject(error));
});