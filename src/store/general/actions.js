import { SET_LOADER } from "../actionTypes";

/**
 * @param {boolean} payload 
 */
export function setLoading(payload) {
  return {
    type: SET_LOADER,
    payload,
  };
}
