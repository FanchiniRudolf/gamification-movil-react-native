import React from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  View,
  Image,
  ImageBackground,
} from "react-native";
//galio
import { Block, Text, theme } from "galio-framework";
//argon
import { articles, Images, argonTheme } from "../constants";
import { Card } from "../components";
import GestureFlipView from "react-native-gesture-flip-card";
import MissionCard from "../components/MissionCard";
import missionList from "../constants/missionList";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;

let apiURI = "http://ec2-52-3-171-226.compute-1.amazonaws.com:3000/api";


class Missions extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
    };
  }
  componentDidMount() {
    this.getMissions();
  }
  async getMissions() {
    try {
      const resp = await fetch(apiURI + '/missions', {
        method: "GET",
        headers:{
          'Content-Type': 'application/json'
        }
      });
      let respJson = await resp.json();
      this.setState({data:respJson})
      console.log(respJson);
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }


  renderCards = () => {
    return (
      <View style={{ width: "100%" }}>
        <MissionCard
          frontCard={missionList[0].front}
          backCard={missionList[0].back}
          full
        />
        <MissionCard
          frontCard={missionList[1].front}
          backCard={missionList[1].back}
          full
        />
        <MissionCard
          frontCard={missionList[2].front}
          backCard={missionList[2].back}
          full
        />
      </View>
    );
  };

  render() {
    return (
      <ImageBackground
        source={require("../assets/imgs/missionBackground.png")}
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height - 40,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.renderCards()}
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 50,
    color: "#F8F32B",
  },
  group: {
    paddingTop: theme.SIZES.BASE,
  },
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure,
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0,
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBlock: {
    overflow: "hidden",
    borderRadius: 4,
  },
  productItem: {
    width: cardWidth - theme.SIZES.BASE * 2,
    marginHorizontal: theme.SIZES.BASE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  productImage: {
    width: cardWidth - theme.SIZES.BASE,
    height: cardWidth - theme.SIZES.BASE,
    borderRadius: 3,
  },
  productPrice: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
  },
  productDescription: {
    paddingTop: theme.SIZES.BASE,
    // paddingBottom: theme.SIZES.BASE * 2,
  },
});

export default Missions;
