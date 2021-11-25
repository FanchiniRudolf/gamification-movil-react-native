/* Constants to define state within the app  */
export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

// This is the endpoint of the API, it is stored in an AWS server
const URI = "http://54.83.38.135:3000/api";

/* SIGNUP Method that authenticates user for the first time in the system 

POST request witha body that encompases:
-> Name
-> Last name
-> email
-> username
-> password
-> school_id
*/
export const signup = (
  name,
  last_name,
  email,
  username,
  password,
  school_id
) => {
  return async (dispatch) => {
    /* Fetch petition to the server */
    const response = await fetch(`${URI}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        last_name: last_name,
        email: email,
        username: username,
        password: password,
        school_id: school_id,
      }),
    });
    if (!response.ok) {
      const errorResData = await response.json();
      const errorMessage = errorResData.error;
      throw new Error(errorMessage);
    }
    const resData = await response.json();

    // console.log(resData);
    console.log("TOKEN: " + resData.session.token);

    dispatch({
      type: SIGNUP,
      token: resData.session.token,
      userId: resData.session.user_id,
    });
  };
};

/* LOGIN Method that authenticates user for the first time in the system 

POST request witha body that encompases:

-> email
-> password
-> device uuid

*/
export const login = (email, password, device_uuid) => {
  return async (dispatch) => {
    const response = await fetch(`${URI}/sessions/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        device_uuid: device_uuid,
      }),
    });
    if (!response.ok) {
      const errorResData = await response.json();
      const errorMessage = errorResData.error;
      throw new Error(errorMessage);
    }
    const resData = await response.json();

    // console.log(resData);
    console.log("TOKEN: " + resData.session.token);

    dispatch({
      type: LOGIN,
      token: resData.session.token,
      userId: resData.session.user_id,
    });
  };
};

export const logout = () => {
  return { type: LOGOUT };
};
