import * as firebase from 'firebase';

firebase.initializeApp(JSON.parse(process.env.REACT_APP_FIREBASE_CREDENTIALS));

export const firestore = firebase.firestore();
