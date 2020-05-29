import { RECEIVE_USER, RECEIVE_ADDRESS } from '../actionTypes';

import { firestore } from '../../plugins/firebase';

export function receiveUser(payload) {
  return {
    type: RECEIVE_USER,
    payload,
  };
}

export function receiveAddress(payload) {
  return {
    type: RECEIVE_ADDRESS,
    payload,
  };
}

export function fetchUser(id) {
  return async dispatch => {
    const response = (
      await firestore.firestore().collection('users').doc(id).get()
    ).data();

    const user = {
      id,
      name: response?.name,
      email: response?.email,
      birthday: response?.birthday,
      phone: response?.phone,
    };

    dispatch(receiveUser(user));

    await firestore
      .firestore()
      .collection('users_addresses')
      .where('userId', '==', id)
      .get()
      .then(snapshop => {
        snapshop.docs.forEach(doc => {
          const address = {
            id: doc.id,
            city: doc.data().city,
            complement: doc.data().complement,
            district: doc.data().district,
            num: doc.data().num,
            street: doc.data().street,
            uf: doc.data().uf,
          };

          dispatch(receiveAddress(address));
        });
      });
  };
}

export function signOut() {
  return async dispatch => {
    await firestore.auth().signOut();

    dispatch(receiveUser(null));
  };
}

/**
 * @param {object} payload
 * @param {string} payload.email
 * @param {string} payload.password
 * @param {string} payload.name
 * @param {string} payload.birthday
 * @param {string} payload.phone
 */
export function registerUser(payload) {
  return async dispatch => {
    const response = await firestore
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password);

    const { password, ...publicData } = payload;

    await firestore
      .firestore()
      .collection('users')
      .doc(response.user.uid)
      .set(publicData);

    dispatch(
      receiveUser({
        id: response.user.uid,
        ...publicData,
      })
    );
  };
}

/**
 * @param {object} payload
 * @param {string} payload.street
 * @param {string} payload.num
 * @param {string} payload.complement
 * @param {string} payload.district
 */
export function registerAddress(payload) {
  return async dispatch => {
    const docRef = await firestore
      .firestore()
      .collection('users_addresses')
      .add({ userId: firestore.auth().currentUser.uid, ...payload });

    dispatch(receiveAddress({ id: docRef.id, ...payload }));
  };
}

/**
 * @param {string} payload
 */
export function resetPassword(payload) {
  //PÁGINA PARA QUAL O USUÁRIO SERÁ DIRECIONADO APÓS RESETAR A SENHA
  const actionCodeSettings = {
    url: window.origin,
  };

  return async () => {
    await firestore.auth().sendPasswordResetEmail(payload, actionCodeSettings);
  };
}

/**
 * @param {object} payload
 * @param {string} payload.email
 * @param {string} payload.password
 */
export function authenticateUser(payload) {
  const { email, password } = payload;

  return async dispatch => {
    const response = await firestore
      .auth()
      .signInWithEmailAndPassword(email, password);
    dispatch(fetchUser(response.user.uid));
  };
}

export function signinWithGoogle() {
  const provider = new firestore.auth.GoogleAuthProvider();

  return async dispatch => {
    const res = await firestore.auth().signInWithPopup(provider);

    const { displayName: name, email, uid } = res.user;

    const user = await firestore.firestore().collection('users').doc(uid).get();
    if (user.exists) {
      await dispatch(fetchUser(uid));
    } else {
      const publicData = {
        email,
        name,
      };
      await firestore.firestore().collection('users').doc(uid).set(publicData);
    }
  };
}

export function signInWithFacebook() {
  const users = 'users';
  const provider = new firestore.auth.FacebookAuthProvider();

  provider.addScope('user_birthday');
  provider.addScope('public_profile');

  provider.setCustomParameters({
    display: 'popup',
  });

  return async dispatch => {
    const res = await firestore.auth().signInWithPopup(provider);

    const profile = res.additionalUserInfo.profile;
    const uid = res.user.uid;

    const user = await firestore.firestore().collection(users).doc(uid).get();

    if (user.exists) {
      await dispatch(fetchUser(uid));
    } else {
      const { name, email, date = profile.birthday } = profile;
      let birthday = new Date(date);

      birthday = birthday.toISOString().substring(0, 10);

      const publicData = {
        email,
        name,
        birthday,
      };

      await firestore.firestore().collection(users).doc(uid).set(publicData);
    }
  };
}
