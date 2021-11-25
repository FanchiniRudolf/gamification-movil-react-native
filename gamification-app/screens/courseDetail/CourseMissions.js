/* 
User interface file:

Course Missions:

Here are the missions presented in a custom card format
The cards flip to reaveal the description of the mission and in the front
there is info such as the title and the rewards of completing it

*/

import React, {useState, useEffect} from "react";

import { FlatList, ImageBackground, Dimensions, Text, View, ActivityIndicator, StyleSheet } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import MissionCard from "../../components/MissionCard";

import * as missionActions from '../../store/actions/missions'
import Colors from "../../constants/Colors";
import moment from "moment";


const CourseMissionsScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const missions = useSelector((state) => state.missions.groupMissions)
  const group_id = props.navigation.getParam("group_id");
  const dispatch = useDispatch();
  console.log("GROUP ID en COURSE MISSION")
  console.log(group_id)
  console.log("MISSIONS")
  console.log(missions);

useEffect(() =>{
  const loadMissions = async () =>{
    setIsLoading(true)
    await dispatch(missionActions.fetchMissions(group_id))
    setIsLoading(false);
  }
  loadMissions();
}, [dispatch])

if (isLoading) {
  return (
    <View style={styles.centered}>
        <ActivityIndicator
          size="large"
          color={Colors.primary}
        ></ActivityIndicator>
      </View>
  )
}
if (!isLoading && missions.length === 0) {
  return (
    <View style={styles.centered}>
      <Text>No se encontraron misiones. Una siesta?</Text>
    </View>
  );
}

  // console.log(courseMissions);

  return (
    <ImageBackground
      source={require("../../assets/imgs/missionBackground.png")}
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height - 40,
      }}
    >
      <FlatList
        data={missions}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <MissionCard
            frontCard={{
              title: itemData.item.title,
              xp: itemData.item.xp + " xp",
              start_date: "Start Date: " + moment(itemData.item.start_date).format("MMM Do YY") ,
              delivery_date: "Delivery Date: " + moment(itemData.item.delivery_date).format("MMM Do YY"),
            }}
            backCard={{
              description: itemData.item.description,
            }}
            full
          />
        )}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: "center", alignItems: "center" }
})

export default CourseMissionsScreen;
