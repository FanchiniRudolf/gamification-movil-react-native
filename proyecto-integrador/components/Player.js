import React from "react";
import { Block, Card } from "galio-framework";
import { View } from "react-native";

class Player extends React.Component {
  render() {
    return (
      <View style={{ justifyContent: "flex-end" }}>
        <Card borderless></Card>
      </View>
    );
  }
}

export default Player;
