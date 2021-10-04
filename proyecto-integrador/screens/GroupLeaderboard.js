import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { StyleSheet, View, Text } from "react-native";
import GestureFlipView from "react-native-gesture-flip-card";

const renderFront = () => {
  return (
    <View>
      <Text style={{ fontSize: 25, color: "#fff" }}>{"Front"}</Text>
    </View>
  );
};

const renderBack = () => {
  return (
    <View style={{ backgroundColor: "black" }}>
      <Text style={{ fontSize: 25, color: "#fff" }}>{"Back"}</Text>
    </View>
  );
};

class GroupLeaderboard extends React.Component {
  render() {
    return (
      <View>
        <GestureFlipView width={300} height={500}>
          {renderBack()}
          {renderFront()}
        </GestureFlipView>
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
