import React, { Component } from "react";
import { StyleSheet } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return <View style={styles.homeScreenContainer}></View>;
  }
}

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
    backgroundColor: "#E6D3A7",
  },
});
