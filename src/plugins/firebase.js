
import * as firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp(JSON.parse(process.env.REACT_APP_FIREBASE_CREDENTIALS));

export const firestore = firebase;

export const auth = firebase.auth();
