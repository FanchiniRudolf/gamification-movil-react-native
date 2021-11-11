import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";

const CourseDetailScreen = (props) => {
  const courseId = props.navigation.getParam("courseId");
  const selectedCourse = useSelector((state) =>
    state.courses.userCourses.find((course) => course.courseId === courseId)
  );
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={styles.imageUrl}
        source={{ uri: selectedCourse.imageUrl }}
      />
      <Text style={styles.details}> {selectedCourse.details}</Text>
      <ScrollView></ScrollView>
    </View>
  );
};

CourseDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("courseName"),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName="md-cart"
          onPress={() => {
            navData.navigate("CourseMissions", {
              courseId: "Hola",
            });
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  imageUrl: {
    width: "75%",
    height: "25%",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 10,
  },
  name: {
    fontSize: 22,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  details: {
    fontSize: 20,
  },
});

export default CourseDetailScreen;
