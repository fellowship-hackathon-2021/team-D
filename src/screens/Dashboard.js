import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import VideoPlayer from "../components/VideoPlayer";
import { StyleSheet, View, Text } from "react-native";
import ProgressBar from "../components/ProgressBar";
import { theme } from "../core/theme";

export default function Dashboard({ navigation, userName }) {
  // remove this when we get the userName prop working
  userName = "ibrahim suhail";
  return (
    <Background>
      <View style={styles.topBarView}>
        <View style={styles.topBar}>
          <View style={{ alignSelf: "flex-start" }}>
            <Text style={{ fontSize: 20 }}>{userName}</Text>
          </View>
          <ProgressBar />
        </View>
      </View>
      <Logo />
      <VideoPlayer />
      <View style={styles.courseOutlineContainer}>
        <View>
          <Button style={styles.course}>Course 1</Button>
          <Button style={styles.course}>Course 2</Button>
          <Button style={styles.course}>Course 3</Button>
        </View>
      </View>
    </Background>
  );
}
const styles = StyleSheet.create({
  topBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  topBarView: {
    backgroundColor: theme.colors.accent,
    top: 0,
    position: "absolute",
    width: "100%",
    height: 35,
    margin: 0,
  },
  courseOutline: { flex: 1 },
  courseOutlineContainer: { width: "100%" },
  course: {
    marginTop: 20,
    fontSize: 18,
  },
});
