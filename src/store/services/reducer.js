import { RECEIVE_SERVICES } from './actionTypes';

const INITIAL_STATE = {
  services: [],
};

/**
 * @param {object} action
 * @param {string} action.type
 * @param {string} action.payload
 */
export default function serviceReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECEIVE_SERVICES:
      return {
        ...state,
        services: action.payload,
      };
    default:
      return state;
  }
}
