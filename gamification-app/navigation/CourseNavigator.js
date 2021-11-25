/* 
File to implememt the course navigation.

It implements StackNavigation for the main screen of the courses and a switch navigation for the authentication.

*/
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { Platform } from "react-native";

import CourseOverviewScreen from "../screens/courses/CoursesOverview";
import CourseDetailScreen from "../screens/courseDetail/CourseDetail";
import CourseProfileScreen from "../screens/courseDetail/CourseProfile";
import CourseLeaderboardScreen from "../screens/courseDetail/CourseLeaderboard";
import CourseMissionsScreen from "../screens/courseDetail/CourseMissions";
import Colors from "../constants/Colors";

import AuthScreen from "../screens/User/AuthScreen";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};
const CoursesNavigator = createStackNavigator(
  {
    CoursesOverview: CourseOverviewScreen,
    CourseDetail: CourseDetailScreen,
    CourseMissions: CourseMissionsScreen,
    CourseProfile: CourseProfileScreen,
    CourseLeaderboard: CourseLeaderboardScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen,
  },
  { defaultNavigationOptions: defaultNavOptions }
);

const MainNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  Courses: CoursesNavigator,
});

export default createAppContainer(MainNavigator);
