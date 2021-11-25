/* 
File to implement the courses overview screen.

It shows the Navigation Bar at the top.

It also shows the courses as cards with the Title and a brief description.

In addition to the title and description there is a default image cover.

Also there is in the right down corner a button to display a modal of adding a new course.

*/
import React, { useState, useEffect, useCallback } from "react";
import {
  Dimensions,
  ImageBackground,
  FlatList,
  Text,
  ActivityIndicator,
  View,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";

import CourseItem from "../../components/CourseItem";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";

import * as coursesActions from "../../store/actions/courses";
import * as authActions from "../../store/actions/auth";

import Colors from "../../constants/Colors";
import { Modal } from "react-native-paper";
import InputModal from "../../components/UI/InputModal";

const defaultBG =
  "https://t4.ftcdn.net/jpg/02/86/02/67/360_F_286026740_xWkobcEk5g38qrH7cpfeImAnlUUSIrc5.jpg";

const CoursesOverviewScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const courses = useSelector((state) => state.courses.userCourses);
  const [error, setError] = useState();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [courseOtp, setText] = useState("");
  const dispatch = useDispatch();
  const logOutAction = dispatch(authActions.logout);

  const loadCourses = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(coursesActions.fetchCourses());
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    const willFocusSub = props.navigation.addListener("willFocus", loadCourses);
    props.navigation.setParams({ logOutAction: logOutAction });
    return () => {
      willFocusSub.remove();
    };
  }, [loadCourses]);

  useEffect(() => {
    setIsLoading(true);
    loadCourses().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadCourses]);

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>An error occurred!</Text>
        <Button
          title="Try again"
          onPress={loadCourses}
          color={Colors.primary}
        />
      </View>
    );
  }

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
  if (!isLoading && courses.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No se encontraron cursos. Puedes agregar uno!</Text>
      </View>
    );
  }

  const addCourse = async (otp) => {
    try {
      await dispatch(coursesActions.addNewCourse(otp));
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/imgs/login-background.jpg")}
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height - 40,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        onRefresh={loadCourses}
        refreshing={isRefreshing}
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <CourseItem
            image={
              itemData.item.imageUrl == null
                ? defaultBG
                : itemData.item.imageUrl
            }
            name={itemData.item.name}
            details={itemData.item.details}
            onOpenCourse={() => {
              console.log(itemData.item);
              props.navigation.navigate("CourseDetail", {
                group_id: itemData.item.group_id,
                courseName: itemData.item.name,
                courseImage: defaultBG,
              });
            }}
          />
        )}
      />
      <Pressable
        style={[styles.button, styles.buttonAdd]}
        onPress={() => setModalOpen(!modalOpen)}
      >
        <Image
          source={require("../../assets/imgs/addCourse.png")}
          style={{ height: "75%", width: "75%" }}
        />
      </Pressable>
      <Modal visible={modalOpen}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Insert course code</Text>
          <TextInput
            editable
            maxLength={6}
            style={styles.input}
            onChangeText={(courseOtp) => setText(courseOtp)}
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              console.log("OTP");
              console.log(courseOtp);
              addCourse(courseOtp);
              setModalOpen(false);
            }}
          >
            <Text style={styles.textStyle}>Ok</Text>
          </Pressable>
        </View>
      </Modal>
    </ImageBackground>
  );
};

CoursesOverviewScreen.navigationOptions = (navData) => {
  // const dispatch = useDispatch();

  return {
    title: "Mis Cursos",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          iconName="log-out-outline"
          onPress={() => {
            navData.navigation.getParam("logOutAction");
            navData.navigation.navigate("Auth");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
  buttonAdd: {
    backgroundColor: "#2196F3",
    width: 70,
    height: 70,
    bottom: 60,
    position: "absolute",
    right: 40,
    borderRadius: 360,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLogout: {
    backgroundColor: "#000000",
    width: 70,
    height: 70,
    bottom: 60,
    position: "absolute",
    left: 40,
    borderRadius: 360,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    width: 70,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 10,
    width: "75%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default CoursesOverviewScreen;
