import React, { Component } from "react";
import {
  Dimensions,
  ImageBackground,
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
} from "react-native";

export default class LogInScreen extends Component {
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
          <View style={styles.buttonContainer}>
            <Button
              title="Register"
              color="#59A985"
              onPress={() => Alert.alert("Button with adjusted color pressed")}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "stretch",
    width: "100%",
  },
});
