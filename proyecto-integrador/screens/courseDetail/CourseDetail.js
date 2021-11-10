import React from "react";

import { View, Text, Image, Button, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const CourseDetailScreen = (props) => {
  const courseId = props.navigation.getParam("courseId");
  const selectedCourse = useSelector((state) =>
    state.courses.userCourses.find((course) => course.courseId === courseId)
  );

  return (
    <View>
      <Text>{selectedCourse.name}</Text>
    </View>
  );
};

CourseDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("courseName"),
  };
};

const styles = StyleSheet.create({});

export default CourseDetailScreen;
