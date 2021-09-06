import React from "react";
import { ScrollView, StatusBar } from "react-native";

import spaceQuestions from "../data/portfolio";
import westernsQuestions from "../data/dsalg";
import computerQuestions from "../data/reactnative";

import { RowItem } from "../components/RowItem";

export default function QuizIndex({ navigation })  {
  return(
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Portfolio"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Space",
          questions: spaceQuestions,
          color: "#36b1f0"
        })
      }
    />
    <RowItem
      name="Data Structures and Algorithms"
      color="#799496"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Westerns",
          questions: westernsQuestions,
          color: "#799496"
        })
      }
    />
    <RowItem
      name="React Native"
      color="#49475B"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Computers",
          questions: computerQuestions,
          color: "#49475B"
        })
      }
    />
  </ScrollView>
  )}
