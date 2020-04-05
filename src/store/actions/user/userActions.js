import { USER_REGISTER, USER_REGISTER_ADDRESS } from './actionTypes';

export function userRegister(payload) {
  return {
    type: USER_REGISTER,
    payload,
  };
}
