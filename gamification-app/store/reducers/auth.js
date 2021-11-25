// Import the constants from the actions
import { LOGIN, LOGOUT, SIGNUP } from "../actions/auth";

// Constant that is exported to the getState
const initialState = {
  token: null,
  userId: null,
};

/* 

Export the state of the app with the parameters of each.

*/
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        token: action.token,
        userId: action.userId,
      };
    case SIGNUP:
      return {
        token: action.token,
        userId: action.userId,
      };
    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};
