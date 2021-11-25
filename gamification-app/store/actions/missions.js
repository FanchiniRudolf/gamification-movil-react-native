import Mission from "../../models/mission";

/* Constant that defines a state within the app. */
export const SET_MISSIONS = "SET_MISSIONS";

// API general endpoint
const URI = "http://54.83.38.135:3000/api";

/* Method to fetch missions from the database. Documented in the API DOCS

METHOD: GET
Headers: Authorization - > auth token recieved from the auth reducer.

Returns:
A json object that is parsed into an array of missions of the specific group.

*/
export const fetchMissions = (group_id) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;

    // any async code you want!
    try {
      const response = await fetch(`${URI}/missions-to-groups/${group_id}`, {
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
      console.log("START");
      console.log(resData);
      console.log("END");
      const loadedMissions = [];

      for (const key in resData) {
        loadedMissions.push(
          new Mission(
            resData[key].mission.id,
            resData[key].group.id,
            resData[key].start_date,
            resData[key].delivery_date,
            resData[key].mission.title,
            resData[key].mission.description,
            resData[key].mission.xp
            // resData[key].imageUrl
          )
        );
      }
      console.log("LOADED MISSIONS");
      console.log(loadedMissions);

      dispatch({ type: SET_MISSIONS, missions: loadedMissions });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};
