import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import homeStack from '../routes/homeStack'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>The Headstarter Crash Course</Header>
      <Paragraph>
        Login or sign up if you don't have an existing account.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("LoginScreen")}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        Sign Up
      </Button>
      {
        //    TO GET TO THE DASHBOARD SCREEN
      }
      <Button mode="outlined" onPress={() => navigation.navigate("Dashboard")}>
        Home
      </Button>
    </Background>
  );
}
