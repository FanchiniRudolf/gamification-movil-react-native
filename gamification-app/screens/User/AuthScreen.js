import React, { useState, useEffect, useReducer, useCallback } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Button,
  ActivityIndicator,
  Alert,
  ImageBackground,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch } from "react-redux";

import Input from "../../components/UI/Input";
import Card from "../../components/UI/Card";
import Colors from "../../constants/Colors";
import * as authActions from "../../store/actions/auth";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const AuthScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      name: "",
      last_name: "",
      username: "",
      school_id: "",
      email: "",
      password: "",
    },
    inputValidities: {
      name: false,
      last_name: false,
      username: false,
      school_id: false,
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert("An error occurred!", error, [{ text: "Okay" }]);
    }
  }, [error]);

  const authHandler = async () => {
    let action;
    if (isSignup) {
      action = authActions.signup(
        formState.inputValues.name,
        formState.inputValues.last_name,
        formState.inputValues.email,
        formState.inputValues.username,
        formState.inputValues.password,
        formState.inputValues.school_id
      );
    } else {
      action = authActions.login(
        formState.inputValues.email,
        formState.inputValues.password,
        ""
      );
    }
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      props.navigation.navigate("Courses");
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );
  if (isSignup) {
    return (
      <KeyboardAvoidingView
        behaivor="padding"
        keyboardVerticalOffset={50}
        style={styles.screen}
      >
        <ImageBackground
          source={require("../../assets/imgs/login-background.jpg")}
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height - 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.headerSignUp}>
            Bienvenido, por favor proporciona los siguientes datos
          </Text>
          <Card style={styles.authContainer}>
            <ScrollView>
              <Input
                id="name"
                label="Nombre"
                keyboardType="default"
                required
                autoCapitalize="words"
                errorText="Please enter a name."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
              <Input
                id="last_name"
                label="Apellido"
                keyboardType="default"
                required
                autoCapitalize="words"
                errorText="Please enter a last name."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
              <Input
                id="username"
                label="Usuario"
                keyboardType="default"
                required
                autoCapitalize="none"
                errorText="Please enter a username."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
              <Input
                id="school_id"
                label="Matrícula"
                keyboardType="default"
                required
                autoCapitalize="none"
                errorText="Please enter a valid ID (A0...)"
                onInputChange={inputChangeHandler}
                initialValue=""
              />
              <Input
                id="email"
                label="E-Mail"
                keyboardType="email-address"
                required
                email
                autoCapitalize="none"
                errorText="Please enter a valid email Address."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
              <Input
                id="password"
                label="Contraseña"
                keyboardType="default"
                secureTextEntry
                required
                minLength={5}
                autoCapitalize="none"
                errorText="Please enter a valid password."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
              <View style={styles.buttonContainer}>
                {isLoading ? (
                  <ActivityIndicator size="small" color={Colors.primary} />
                ) : (
                  <Button
                    title={isSignup ? "Registrarse" : "Iniciar Sesión"}
                    color={Colors.primary}
                    onPress={authHandler}
                  ></Button>
                )}
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title={`Cambiar a ${isSignup ? "Iniciar Sesión" : "Registrarse"}`}
                  color={Colors.accent}
                  onPress={() => {
                    setIsSignup((prevState) => !prevState);
                  }}
                ></Button>
              </View>
            </ScrollView>
          </Card>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  } else {
    return (
      <KeyboardAvoidingView
        behaivor="padding"
        keyboardVerticalOffset={50}
        style={styles.screen}
      >
        <ImageBackground
          source={require("../../assets/imgs/login-background.jpg")}
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height - 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.header}>Bienvenido de regreso!</Text>
          <Card style={styles.authContainer}>
            <ScrollView>
              <Input
                id="email"
                label="E-Mail"
                keyboardType="email-address"
                required
                email
                autoCapitalize="none"
                errorText="Por favor ingresa un email válido."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
              <Input
                id="password"
                label="Contraseña"
                keyboardType="default"
                secureTextEntry
                required
                minLength={5}
                autoCapitalize="none"
                errorText="Por favor ingresa una contraseña válida."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
              <View style={styles.buttonContainer}>
                {isLoading ? (
                  <ActivityIndicator size="small" color={Colors.primary} />
                ) : (
                  <Button
                    title={isSignup ? "Registrarse" : "Iniciar Sesión"}
                    color={Colors.primary}
                    onPress={authHandler}
                  ></Button>
                )}
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title={`Cambiar a ${isSignup ? "Iniciar Sesión" : "Registrarse"}`}
                  color={Colors.accent}
                  onPress={() => {
                    setIsSignup((prevState) => !prevState);
                  }}
                ></Button>
              </View>
            </ScrollView>
          </Card>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
};

AuthScreen.navigationOptions = {
  headerTitle: "Inicio de Sesión",
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "white",
    bottom: 40,
  },
  headerSignUp: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "white",
    bottom: 40,
  },
  screen: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  authContainer: {
    width: "80%",
    maxWidth: 400,
    maxHeight: 400,
    padding: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default AuthScreen;
