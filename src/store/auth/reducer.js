import { RECEIVE_USER, RECEIVE_ADDRESS } from '../actionTypes';

const INITIAL_STATE = {
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
          address: action.payload,
        },
      };

    default:
      return state;
  }
}
