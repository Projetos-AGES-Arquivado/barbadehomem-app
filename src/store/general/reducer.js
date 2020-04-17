import { SET_LOADER } from '../actionTypes';

//ESTADO INICIAL DO COMPONENTE
const INITIAL_STATE = {
  isLoading: true,
};

export default function generalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}
