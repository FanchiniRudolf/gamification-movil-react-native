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

const CourseMissionsScreen = (props) => {
  const courseId = props.params;
  console.log(courseId);
  return (
    <View>
      <Text> {courseId}</Text>
    </View>
  );
};

export default CourseMissionsScreen;
