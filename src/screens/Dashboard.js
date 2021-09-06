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
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import LoginScreen from '../screens/LoginScreen'
import QuizIndex from '../screens/QuizIndex'

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

  return (
    <Background>
      <View style={styles.topBarView}>
        <View style={styles.topBar}>
          <Text>User Name</Text>
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
    backgroundColor: theme.colors.placeholder,
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
