import React from "react";
import { FlatList, Text } from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import CourseItem from "../../components/CourseItem";

const CoursesOverviewScreen = (props) => {
  const courses = useSelector((state) => state.courses.userCourses);

  return (
    <FlatList
      data={courses}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <CourseItem
          image={itemData.item.imageUrl}
          name={itemData.item.name}
          teacherName={itemData.item.teacher.name}
          teacherLastName={itemData.item.teacher.last_name}
          details={itemData.item.details}
          onOpenCourse={() => {
            props.navigation.navigate("CourseDetail", {
              courseId: itemData.item.courseId,
              courseName: itemData.item.name,
            });
          }}
        />
      )}
    />
  );
};

CoursesOverviewScreen.navigationOptions = {
  title: "My Courses",
};

export default CoursesOverviewScreen;
