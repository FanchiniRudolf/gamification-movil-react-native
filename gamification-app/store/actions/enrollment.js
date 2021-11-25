import Enrollment from "../../models/enrollment";

export const SET_ENROLLMENTS = "SET_ENROLLMENTS";

// API endpoint
const URI = "http://54.83.38.135:3000/api";

/* Fetch Method that pulls the enrollments. 

It uses a GET request

The enpoint recieves a query parameter in the form of the course ID that the user is selecting, 
this gets passed as a prop from the coursesOverview screen.

It returns an array of students, each of them with a 
student ID, experience, coins, name and last name


Headers:

-> Authorization: token generated at the moment of authentication.

*/
export const fetchEnrollments = (courseId) => {
  return async (dispatch, getState) => {
    console.log("TOKEN");
    const token = getState().auth.token;
    try {
      const response = await fetch(`${URI}/groups/${courseId}`, {
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
      console.log("STUDENTS");
      console.log(resData.students);
      const loadedEnrollments = [];

      for (const key in resData.students) {
        loadedEnrollments.push(
          new Enrollment(
            resData.students[key].student.id,
            resData.students[key].xp,
            resData.students[key].coins,
            resData.students[key].student.name,
            resData.students[key].student.last_name
          )
        );
      }

      console.log("ENROLLMENTS");
      console.log(loadedEnrollments);

      dispatch({ type: SET_ENROLLMENTS, enrollments: loadedEnrollments });
    } catch (err) {
      throw err;
    }
  };
};
