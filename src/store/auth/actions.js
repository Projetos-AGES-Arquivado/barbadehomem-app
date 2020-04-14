import {
  RECEIVE_USER,
  RECEIVE_ADDRESS,
  SIGN_IN,
  SIGN_OUT,
} from '../actionTypes';
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

export function signIn(payload) {
  return {
    type: SIGN_IN,
    payload,
  };
}

export function signOut(payload) {
  return {
    type: SIGN_OUT,
    payload,
  };
}

export function fetchUser(id) {
  return async dispatch => {
    const record = await firestore
    .firestore()
    .collection('users')
    .doc(id)
    .get();
    
    dispatch(
      receiveUser({
        id: record.id,
        ...record.data(),
      })
    );
  };
}

export function endSession() {
  return async dispatch => {
    await firestore.auth().signOut();

    dispatch(signOut());
  }
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
  * @param {string} payload.city
  * @param {string} payload.uf
  */
  export function registerAddress(payload) {
    return async dispatch => {
      const docRef = await firestore
      .firestore()
      .collection('users')
      .doc(firestore.auth().currentUser.uid)
      .collection('address')
      .add(payload);
      
      dispatch(receiveAddress({ id: docRef.id, ...payload }));
    };
  }
