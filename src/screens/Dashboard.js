import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import VideoPlayer from "../components/VideoPlayer";
import { StyleSheet, View, Text, Linking } from "react-native";
import ProgressBar from "../components/ProgressBar";
import { theme } from "../core/theme";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import LoginScreen from '../screens/LoginScreen'
import QuizIndex from '../screens/QuizIndex'
import {Resume, Dsalg, Projects} from '../core/links'


export default function Dashboard({ navigation }) {
  // const screens = {
  //   Login: {
  //     screen: LoginScreen
  //   },
  //   QuizIndex: {
  //     screen: QuizIndex
  //   }
  // }

  // const HomeStack = createStackNavigator(screens);
  // createAppContainer(HomeStack);

  // const pressHandler = () => {
  //   navigation.navigate('QuizIndex')
  // }
  const res = Resume.RESUME;
  const dsalg = Dsalg.DSALG;
  const proj = Projects.PROJECTS;
  return (
    <Background>
      <View style={styles.topBarView}>
        <View style={styles.topBar}>
          <Text>Free Tier. Create account to gain full access.</Text>
          
        </View>
      </View>
      <Logo />
      <VideoPlayer />
      <View style={styles.courseOutlineContainer}>
        <View>
        {/* <Text style={styles.course}
          onPress={() => Linking.openURL(res)}>
            Resume
        </Text> */}
          <Button onPress={() => Linking.openURL(res)} style={styles.course}>Resume Workshop (Sample Session)</Button>
          <Button onPress={() => Linking.openURL(dsalg)} style={styles.course}>DS & Algo Workshop (Sample Session) 2</Button>
          <Button onPress={() => Linking.openURL(proj)} style={styles.course}>App Dev (Sample Session)</Button>
          <Button style={styles.course} mode="outlined" onPress={() => navigation.navigate("QuizIndex")}>
        Quiz
      </Button>
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
  },
  topBarView: {
    fontSize: 100,
    backgroundColor: '#c5fce4',
    top: 0,
    position: "absolute",
    width: "100%",
    height: 25,
    margin: 0,
  },
  courseOutline: { flex: 1 },
  courseOutlineContainer: { width: "100%" },
  course: {
    marginTop: 20,
    fontSize: 18,
  },
});
