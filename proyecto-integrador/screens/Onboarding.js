import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import argonTheme from "../constants/Theme";
import Images from "../constants/Images";

class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center>
          <ImageBackground
            source={Images.Onboarding}
            style={{ height, width }}
          />
        </Block>
        <Block center>
          <Image source={Images.LogoOnboarding} style={styles.logo} />
        </Block>
        <Block flex space="between" style={styles.padded}>
          <Block flex space="around">
            <Block style={styles.title}>
              <Block>
                <Text color="white" size={60}>
                  Pantalla
                </Text>
              </Block>
              <Block>
                <Text color="white" size={60}>
                  OnBoarding
                </Text>
              </Block>
              <Block style={styles.subTitle}>
                <Text color="white" size={16}>
                  Equipo 6
                </Text>
                <Text color="white" size={16}>
                  Desarrollo Móvil
                </Text>
              </Block>
            </Block>
            <Block center>
              <Button
                style={styles.button}
                color={argonTheme.COLORS.SECONDARY}
                onPress={() => navigation.navigate("App")}
                textStyle={{ color: argonTheme.COLORS.BLACK }}
              >
                Ir
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  logo: {
    position: "relative",
    marginTop: "-80%",
  },
  title: {
    marginTop: "-50%",
  },
  subTitle: {
    marginTop: 20,
    padding:10
  },
});

export default Onboarding;
