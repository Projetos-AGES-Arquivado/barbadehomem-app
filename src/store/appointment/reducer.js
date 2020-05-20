import { RECEIVE_PROVIDERS, RECEIVE_APPOINTMENTS } from './actionTypes';

const INITIAL_STATE = {
  providers: [],
  userAppointments: [],
};

/**
 * @param {object} action
 * @param {string} action.type
 * @param {string} action.payload
 */
export default function appointmentReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECEIVE_PROVIDERS:
      return {
        ...state,
        providers: action.payload,
      };
    case RECEIVE_APPOINTMENTS:
      return {
        ...state,
        userAppointments: action.payload,
      };
    default:
      return state;
  }
}
