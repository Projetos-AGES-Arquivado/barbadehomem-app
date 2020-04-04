import { AUTH_LOGIN } from '../actionTypes';

export const authLogin = payload => {
  return dispatch => {
    if (
      payload.emailAddress !== 'test@test.com' &&
      payload.password !== '123456'
    ) {
      throw new Error('Invalid credentials');
    }
    // call firebase
    // return state with user authenticated
    dispatch({
      type: AUTH_LOGIN,
      payload: {
        id: '123',
        name: 'Teste',
        emailAddress: 'test@test.com',
      },
    });
  };
};
