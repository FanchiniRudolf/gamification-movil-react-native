import React from "react";
import { withNavigation } from "@react-navigation/compat";
import PropTypes from "prop-types";
import {
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { argonTheme } from "../constants";
import GestureFlipView from "react-native-gesture-flip-card";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;

class MissionCard extends React.Component {
  render() {
    const {
      navigation,
      horizontal,
      full,
      style,
      ctaColor,
      imageStyle,
      frontCard,
      backCard,
    } = this.props;

    const imageStyles = [
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle,
    ];
    const cardContainer = [styles.card, styles.shadow, style];
    const imgContainer = [
      styles.imageContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
      styles.shadow,
    ];

    const renderCard = (renderedSide) => {
      return (
        <Block card flex style={cardContainer}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate("Pro")}>
            <Block flex space="between" style={styles.cardDescription}>
              <Image
                source={require("../assets/imgs/MissionIcon.png")}
                style={{
                  width: 100,
                  height: 100,
                  position: "absolute",
                  left: 10,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  flexDirection: "column",
                  justifyContent: "center",
                  left: 120,
                }}
              >
                <Text size={18} style={styles.cardTitle}>
                  {renderedSide.title}
                </Text>
                <Text size={14} style={styles.cardTitle}>
                  {renderedSide.description}
                </Text>
                <Text
                  size={12}
                  muted={!ctaColor}
                  color={ctaColor || argonTheme.COLORS.ACTIVE}
                  bold
                >
                  {renderedSide.xp}
                </Text>
                <Text size={12} style={styles.cardTitle}>
                  {renderedSide.coins}
                </Text>
                <Text size={12} style={styles.cardTitle}>
                  {renderedSide.hp}
                </Text>
              </View>
            </Block>
          </TouchableWithoutFeedback>
        </Block>
      );
    };

    return (
      <GestureFlipView width={styles.card.width} height={styles.card.height}>
        {renderCard(frontCard)}
        {renderCard(backCard)}
      </GestureFlipView>
    );
  }
}

MissionCard.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
  frontCard: PropTypes.object,
  backCard: PropTypes.object,
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#2B2D42",
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 16,
    width: Dimensions.get("screen").width,
    height: 150,
    flexDirection: "column",
  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    color: "#FE4A49",
  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: "hidden",
  },
  image: {
    // borderRadius: 3,
  },
  horizontalImage: {
    height: 122,
    width: "auto",
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  fullImage: {
    height: 215,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});

export default MissionCard;
