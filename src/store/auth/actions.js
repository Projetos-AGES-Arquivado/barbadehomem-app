import { RECEIVE_USER } from '../actionTypes';
import { firestore } from '../../plugins/firebase';

export function receiveUser(payload) {
  return {
    type: RECEIVE_USER,
    payload,
  };
}

export async function fetchUser(id) {
  return async (dispatch) => {
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
