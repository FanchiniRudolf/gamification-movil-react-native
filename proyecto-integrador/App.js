import React, { useState } from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import coursesReducer from "./store/reducers/courses";
import CourseNavigator from "./navigation/CourseNavigator";

const rootReducer = combineReducers({
  courses: coursesReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <CourseNavigator />
    </Provider>
  );
}
