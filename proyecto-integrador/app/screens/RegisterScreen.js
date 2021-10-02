import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Button,
  ImageBackground,
} from "react-native";
import ToggleSwitch from "toggle-switch-react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class RegisterScreen extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={require("../assets/credentialsBackground.jpg")}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Register Now</Text>
        </View>
        <View style={styles.registerInputContainer}>
          <TextInput
            {...this.props}
            editable
            maxLength={50}
            keyboardType="email-address"
            style={styles.textInput}
            autoCompleteType="off"
            placeholder="example@tec.com"
          />
          <TextInput
            {...this.props}
            editable
            maxLength={50}
            secureTextEntry={true}
            style={styles.textInput}
            autoCompleteType="off"
            placeholder="Password"
          />
          <TextInput
            {...this.props}
            editable
            maxLength={50}
            secureTextEntry={true}
            style={styles.textInput}
            autoCompleteType="off"
            placeholder="Password"
          />
          <TextInput
            {...this.props}
            editable
            maxLength={50}
            secureTextEntry={true}
            style={styles.textInput}
            autoCompleteType="off"
            placeholder="Password"
          />
          <TextInput
            {...this.props}
            editable
            maxLength={50}
            secureTextEntry={true}
            style={styles.textInput}
            autoCompleteType="off"
            placeholder="Password"
          />
        </View>
        <View style={styles.buttonContainer}>
          <ToggleSwitch
            isOn={false}
            onColor="green"
            offColor="red"
            label="Professor"
            labelStyle={{ color: "white" }}
          />
          <Button
            title="Register"
            color="#59A985"
            onPress={() => Alert.alert("Button with adjusted color pressed")}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: "50%",
  },
  registerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  registerInputContainer: {
    justifyContent: "space-evenly",
    width: "50%",
    alignItems: "center",
  },
  titleContainer: {},
  titleText: {
    fontSize: 30,
    color: "#3D262A",
  },
  textInput: {
    width: "100%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
});
