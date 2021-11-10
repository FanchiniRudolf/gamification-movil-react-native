import React from "react";
import { Text, View } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

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
