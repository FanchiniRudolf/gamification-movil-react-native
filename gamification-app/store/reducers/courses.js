/* 
This File works as a reducer of the actions of the course.

Essentially setting up the state across the state for it to be retrived
in runtime.


*/

// State constants ftom the Courses Actions
import { SET_COURSES } from "../actions/courses";
import { ADD_NEW_COURSE } from "../actions/courses";

/* Initial State:
 userCourses is an array from fetchCourses
 response is the API response of addNewCourse */
const initialState = {
  userCourses: [],
  response: ''
};

/* Export with arrow function refering to the specific action. */
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COURSES:
      return {
        userCourses: action.courses,
      };

    case ADD_NEW_COURSE:
      return{
        response: action.response
      }
    default:
      return state;
  }
};
