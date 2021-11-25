/* 
This File works as a reducer of the actions of the missions.

Essentially setting up the state across the state for it to be retrived
in runtime.

*/

// State constants from the Missions Actions
import { SET_MISSIONS } from "../actions/missions";

// groupMissions is the array that is mapped in the actions from the
// response of the API
const initialState = {
  groupMissions: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MISSIONS:
      return {
        groupMissions: action.missions,
      };
    default:
      return state;
  }
};
