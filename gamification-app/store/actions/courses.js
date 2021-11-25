import Course from "../../models/course";

/* 
Constants for the state of the app.
*/
export const SET_COURSES = "SET_COURSES";
export const ADD_NEW_COURSE = "ADD_NEW_COURSE";

// API endpoint
const URI = "http://54.83.38.135:3000/api";

/* Fetch Method that pulls the courses from the database. 

It uses a GET request

Headers:

-> Authorization: token generated at the moment of authentication.

Pulled from the auth action.

*/
export const fetchCourses = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    try {
      const response = await fetch(`${URI}/users_groups`, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });

      if (!response.ok) {
        const errorResData = await response.json();
        const errorMessage = errorResData.error;
        throw new Error(errorMessage);
      }

      const resData = await response.json();
      // console.log("RES DATA");
      // console.log(resData);
      // console.log("BREAK");
      const loadedCourses = [];

      for (const key in resData) {
        loadedCourses.push(
          new Course(
            resData[key].course_id,
            resData[key].id,
            resData[key].course.name,
            resData[key].course.details,
            resData[key].course.teacher.name,
            resData[key].created,
            resData[key].updated,
            resData[key].enable
            // resData[key].imageUrl
          )
        );
      }
      // console.log("LOADED GROUPS")
      // console.log(loadedCourses);

      dispatch({ type: SET_COURSES, courses: loadedCourses });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

/* Add course method

POST request to add a new course

Headers: Authorization: token

Body: otp: otp, this is the one time password provided by the teacher.
*/
export const addNewCourse = (otp) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    console.log("INSIDE ADD NEW COURSE");
    console.log(token);
    const data = { otp: otp };
    try {
      const response = await fetch(`${URI}/users_groups`, {
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorResData = await response.json();
        const errorMessage = errorResData.error;
        throw new Error(errorMessage);
      }
      const resData = await response.json();
      console.log("RES DATA");
      console.log(resData);
      console.log("BREAK");
      dispatch({ type: ADD_NEW_COURSE, response: resData });
    } catch (err) {
      throw err;
    }
  };
};
