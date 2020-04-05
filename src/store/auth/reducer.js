import { RECEIVE_USER } from '../actionTypes';

//ESTADO INICIAL DO COMPONENTE
const INITIAL_STATE = {
  loaded: false,
  user: null,
};

export default function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECEIVE_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
