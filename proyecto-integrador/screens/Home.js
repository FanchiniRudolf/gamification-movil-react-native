import React from "react";
import { StyleSheet, Dimensions, ScrollView, Image, View } from "react-native";
import { Block, theme } from "galio-framework";

import { Card } from "../components";
import articles from "../constants/articles";
const { width } = Dimensions.get("screen");

class Home extends React.Component {
  renderArticles = () => {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          source={require("../assets/imgs/homeBackground.jpg")}
          style={{
            position: "absolute",
            left: 0,
            width: Dimensions.get("screen").width,
            height: Dimensions.get("window").height,
          }}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.articles}
        >
          <Block flex>
            <Block flex row>
              <Card item={articles[2]} />
            </Block>
            <Card item={articles[3]} horizontal />
            <Card item={articles[4]} full />
          </Block>
        </ScrollView>
      </View>
    );
  };

  render() {
    return this.renderArticles();
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;
