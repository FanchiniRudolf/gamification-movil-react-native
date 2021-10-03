import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { StyleSheet, View, Text } from "react-native";
import Player from "../components/Player";

class GroupLeaderboard extends React.Component {
  render() {
    return (
      <View style={styles.leaderboard}>
        <Text>Hola Mundo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  leaderboard: {
    top: "10%",
    width: "80%",
    justifyContent: "flex-end",
  },
});

export default GroupLeaderboard;
