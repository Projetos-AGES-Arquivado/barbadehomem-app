import { RECEIVE_APPOINTMENTS } from './actionTypes';

const INITIAL_STATE = {
  appointments: [],
};

/**
 * @param {object} action
 * @param {string} action.type
 * @param {string} action.payload
 */
export default function appointmentReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECEIVE_APPOINTMENTS:
      return {
        ...state,
        appointments: [...action.payload],
      };
    default:
      return state;
  }
}
