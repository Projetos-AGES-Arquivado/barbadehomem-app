import { AUTH_LOGIN } from '../actionTypes';

const defaultState = {
  user: null,
};

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
