import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";

import CourseOverviewScreen from "../screens/courses/CoursesOverview";
import CourseDetailScreen from "../screens/courseDetail/CourseDetail";
import Colors from "../constants/Colors";

const CoursesNavigator = createStackNavigator(
  {
    CoursesOverview: CourseOverviewScreen,
    CourseDetail: CourseDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
);

export default createAppContainer(CoursesNavigator);
