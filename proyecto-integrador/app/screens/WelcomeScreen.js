import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";

export default class WelcomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <Text style={styles.titleText}>Welcome to Gamification App</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Log In")}
          style={styles.loginButtonBackground}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Register")}
          style={styles.registerButton}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonText: {
    flex: 1,
    top: "25%",
    color: "white",
    fontSize: 25,
  },
  loginButtonBackground: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#59A985",
    alignItems: "center",
  },
  titleText: {
    color: "#3A7563",
    position: "absolute",
    top: 110,
    fontSize: 25,
  },
});
