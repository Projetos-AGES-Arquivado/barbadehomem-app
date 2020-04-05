import { RECEIVE_USER } from '../actionTypes';
import { firestore } from '../../plugins/firebase';

export function receiveUser(payload) {
  return {
    type: RECEIVE_USER,
    payload,
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
      .doc(response.user.id)
      .set(publicData);

    dispatch(
      receiveUser({
        id: response.user.id,
        ...payload,
      })
    );
  };
}
