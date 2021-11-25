import React, { useState } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import * as Font from "expo-font";

import coursesReducer from "./store/reducers/courses";
import missionsReducer from "./store/reducers/missions";
import enrollmentReducer from "./store/reducers/enrollment";
import CourseNavigator from "./navigation/CourseNavigator";
import authReducer from "./store/reducers/auth";
import ReduxThunk from "redux-thunk";

/* Without this declaration redux Thunk wont be able to extract the exports of the reducers */
const rootReducer = combineReducers({
  courses: coursesReducer,
  missions: missionsReducer,
  auth: authReducer,
  enrollment: enrollmentReducer,
});

/* Here is the binding of the reduced and ReduxThunk */
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <CourseNavigator />
    </Provider>
  );
}
