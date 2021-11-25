/* 
User interface file:

Course Detail:

An in depth look at the course selected in the Course Overview Screen,

It displays the Course image, a brief description and stats.

It has two buttons in the header, the one of the leaderboard and the one of the missions

*/
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";
import * as courseEnrollments from "../../store/actions/enrollment";
import Colors from "../../constants/Colors";


const defaultBG =
  "https://t4.ftcdn.net/jpg/02/86/02/67/360_F_286026740_xWkobcEk5g38qrH7cpfeImAnlUUSIrc5.jpg";

const CourseDetailScreen = (props) => {
  const group_id = props.navigation.getParam("group_id");
  const selectedCourse = useSelector((state) =>
    state.courses.userCourses.find((course) => course.group_id === group_id)
  );
  const enrollments = useSelector((state) => state.enrollment.groupEnrollments);
  const student_id = useSelector((state) => state.auth.userId);
  const [isLoading, setIsLoading] = useState(false);
  var student_xp = 0;
  var student_coins = 0;
  const dispatch = useDispatch();

  for (const item in enrollments) {
    if (enrollments[item].student_id == student_id) {
      student_xp = enrollments[item].xp;
      student_coins = enrollments[item].coins;
      break;
    }
  }

  useEffect(() => {
    const loadedEnrollments = async () => {
      setIsLoading(true);
      await dispatch(courseEnrollments.fetchEnrollments(group_id));
      setIsLoading(false);
    };
    loadedEnrollments();
  }, [dispatch]);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator
          size="large"
          color={Colors.primary}
        ></ActivityIndicator>
      </View>
    );
  }

  console.log("GROUP ID en COURSE DETAIL");
  console.log(group_id);
  // console.log("SELECTED COURSE")
  // console.log(selectedCourse);
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image style={styles.imageUrl} source={{ uri: defaultBG }} />
      <Text style={styles.details}> {selectedCourse.teacher}</Text>
      <Text style={styles.details}> {selectedCourse.details}</Text>
      <Text style={styles.stats}> {student_xp} xp</Text>
      <Text style={styles.stats}> {student_coins} coins</Text>
      <ScrollView></ScrollView>
    </View>
  );
};

const logout = async () => {
  try {
    await dispatch(coursesActions.addNewCourse(otp));
  } catch (err) {
    throw new Error(err);
  }
};

CourseDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("courseName"),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          iconName="medal-outline"
          onPress={() => {
            console.log("GROUP ID");
            console.log(navData.navigation.getParam("group_id"));
            navData.navigation.navigate("CourseLeaderboard", {
              group_id: navData.navigation.getParam("group_id"),
            });
          }}
        />
        <Item
          iconName="person-circle-outline"
          onPress={() => {
            navData.navigation.navigate("CourseMissions", {
              group_id: navData.navigation.getParam("group_id"),
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
    top: 25,
    fontSize: 20,
  },
  stats: {
    top: 40,
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "bold",
  },
});

export default CourseDetailScreen;
