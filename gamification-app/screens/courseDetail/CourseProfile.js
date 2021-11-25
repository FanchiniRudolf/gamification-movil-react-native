import React, { Component } from "react";
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
import ReactStoreIndicator from "react-score-indicator";

class CourseProfileScreen extends React.Component {
  render() {
    return <ReactStoreIndicator value={30} maxValue={100} />;
  }
}

export default CourseProfileScreen;
