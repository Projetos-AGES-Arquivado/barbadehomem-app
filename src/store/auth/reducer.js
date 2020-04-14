import {
  RECEIVE_USER,
  RECEIVE_ADDRESS,
  IS_AUTHENTICATED,
} from '../actionTypes';

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
    case RECEIVE_ADDRESS:
      return {
        ...state,
        user: {
          ...state.user,
          adresses: [...(state.user.address || []), action.payload],
        },
      };
    case IS_AUTHENTICATED:
      return {
        ...state,
        loaded: action.payload,
      };
    default:
      return state;
  }
}
