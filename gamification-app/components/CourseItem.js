/* 

Course Item component to be imported in the course overview screen as a matter of card.

*/
import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const CourseItem = (props) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "Android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <TouchableCmp onPress={props.onOpenCourse} useForeground>
      <View style={styles.course}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.image }} />
        </View>
        <View style={{ left: 5 }}>
          <Text style={styles.name}> {props.name}</Text>
          <Text style={styles.details}> {props.details}</Text>
        </View>
      </View>
    </TouchableCmp>
  );
};

const styles = StyleSheet.create({
  course: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
    overflow: "hidden",
    backgroundColor: "#2B2D42",
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  name: {
    fontSize: 20,
    marginVertical: 4,
    color: "#FE4A49",
  },
  teacher: {
    fontSize: 14,
    color: "white",
  },
  details: {
    fontSize: 15,
    marginVertical: 2,
    color: "white",
  },
});

export default CourseItem;
