/* 
This File works as a reducer of the actions of the enrollment.

Essentially setting up the state across the state for it to be retrived
in runtime.


*/

// State constants from the Enrollment Actions
import { SET_ENROLLMENTS } from "../actions/enrollment";

// groupEnrollments is the api response containing the students array.
const initialState = {
  groupEnrollments: [],
};

/* Export associated with teh enrollment action. */
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ENROLLMENTS:
      return {
        groupEnrollments: action.enrollments,
      };
    default:
      return state;
  }
};
