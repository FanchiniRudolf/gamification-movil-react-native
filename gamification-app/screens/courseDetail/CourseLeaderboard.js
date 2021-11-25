/* 
User interface file:

LeaderBoard:

A table in stack view that presents the leaderboard from the API

*/
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import * as courseEnrollments from "../../store/actions/enrollment";
import Leaderboard from "react-native-leaderboard";
import { useDispatch, useSelector } from "react-redux";
import Colors from "../../constants/Colors";

const CourseLeaderboardScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const enrollments = useSelector((state) => state.enrollment.groupEnrollments);
  const student_id = useSelector((state) => state.auth.userId);
  const group_id = props.navigation.getParam("group_id");
  var student_xp = "";

  console.log(student_id);
  let place = 0;
  useEffect(() => {
    const loadedEnrollments = async () => {
      setIsLoading(true);
      await dispatch(courseEnrollments.fetchEnrollments(group_id));
      setIsLoading(false);
    };
    loadedEnrollments();
  }, [dispatch]);

  console.log(enrollments);

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

  for (const item in enrollments) {
    place++;
    if (enrollments[item].student_id == student_id) {
      student_xp = enrollments[item].xp;
      break;
    }
  }

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Tus estadísticas actuales son</Text>
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.tablePlace}>{place}</Text>
        <Image
          source={require("../../assets/imgs/MissionMenuIcon.png")}
          style={{ height: 100, width: 100 }}
        />
        <Text style={styles.tablePlace}>{student_xp} xp</Text>
      </View>
      <View>
        <Leaderboard
          data={enrollments}
          sortBy="xp"
          labelBy="student_name"
          icon="https://img1.freepng.es/20180626/ehy/kisspng-avatar-user-computer-icons-software-developer-5b327cc951ae22.8377289615300354013346.jpg"
        />
      </View>
    </View>
  );
};

CourseLeaderboardScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Leaderboard",
  };
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  scoreContainer: {
    marginTop: 20,
    marginBottom: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tablePlace: {
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "bold",
  },
});

export default CourseLeaderboardScreen;
