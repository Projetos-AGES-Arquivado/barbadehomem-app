import { RECEIVE_SERVICES, RECEIVE_PROMOTIONS } from './actionTypes';

const INITIAL_STATE = {
  services: [],
  promotions: [],
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
    case RECEIVE_PROMOTIONS:
      return {
        ...state,
        promotions: action.payload,
      };
    default:
      return state;
  }
}
