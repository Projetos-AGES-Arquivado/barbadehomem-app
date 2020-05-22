import { RECEIVE_PROVIDERS } from './actionTypes';

const INITIAL_STATE = {
  providers: [],
};

/**
 * @param {object} action
 * @param {string} action.type
 * @param {string} action.payload
 */
export default function providerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECEIVE_PROVIDERS:
      return {
        ...state,
        providers: action.payload,
      };
    default:
      return state;
  }
}
