
import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/messaging';

firebase.initializeApp(JSON.parse(process.env.REACT_APP_FIREBASE_CREDENTIALS));

export const firestore = firebase;

export const auth = firebase.auth();

export const messaging = firebase.messaging();
