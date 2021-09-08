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
import AwesomeButton from "react-native-really-awesome-button";
// import LinearGradient from "react-native-linear-gradient";
import {LinearGradient} from 'expo-linear-gradient';


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
          <AwesomeButton backgroundColor = "#4361ee" stretch = "true" backgroundShadow = "#ffffff" backgroundDarker = "#ffffff" onPress={() => Linking.openURL(res)} style={styles.courseBtn}>Resume Workshop</AwesomeButton> 
          <AwesomeButton backgroundColor = "#4895ef" stretch = "true"  backgroundShadow = "#ffffff" backgroundDarker = "#ffffff" onPress={() => Linking.openURL(dsalg)} style={styles.courseBtn}>DS & Algo Workshop</AwesomeButton>
          <AwesomeButton backgroundColor = "#4361ee" stretch = "true" backgroundShadow = "#ffffff" backgroundDarker = "#ffffff" onPress={() => Linking.openURL(proj)} style={styles.courseBtn}>App Dev </AwesomeButton>
          <AwesomeButton 

            ExtraContent={
              <LinearGradient
                colors={["#fb8500", "#ffb703", "#219ebc", "#8ecae6"]}
              />
            }
            backgroundColor = "#b5179e"
            
            
            // style={styles.quizBtn} 
            // raiseLevel = "8"
            borderColor = "#F47133"
            activityColor = "#fb8500"
            stretch = "true" 
            mode="outlined" 
            onPress={() => navigation.navigate("QuizIndex") 
          }>
        Quiz
      </AwesomeButton>
     
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
  courseOutlineContainer: { 
    width: "100%",
    
   },
  course: {
    marginTop: 20,
    fontSize: 18,
    
  },
  quizBtn: {
    width : "50%",
    alignSelf : "center",
    backgroundColor : "#fdffb6",
    color : "#fdffb6",
    
  },
  courseBtn : {
    alignSelf : "center",
    paddingTop : 75,
    paddingBottom : 0,
    borderRadius : 0,
    width : "70%",
  },
});
