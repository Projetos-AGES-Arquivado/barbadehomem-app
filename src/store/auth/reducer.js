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
<<<<<<< HEAD
          address: action.payload,
=======
          addresses: [...(state.user.address || []), action.payload],
>>>>>>> 869bc61b809d1d5fe89c0084ee5f560e49f72768
        },
      };

    default:
      return state;
  }
}
