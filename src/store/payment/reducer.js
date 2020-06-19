import { RECEIVE_PAYMENT } from './actionTypes';

const INITIAL_STATE = {
  payments: [],
};

/**
 * @param {object} action
 * @param {string} action.type
 * @param {string} action.payload
 */
export default function serviceReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECEIVE_PAYMENT:
      return {
        ...state,
        payments: action.payload,
      };
    default:
      return state;
  }
}
