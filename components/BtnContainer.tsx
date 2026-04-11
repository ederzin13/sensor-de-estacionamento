import { View, Text } from "react-native";
import React from "react";
import Btn from "./Btn";
import { globalStyles } from "../styles/globalStyles";

export default function BtnContainer() {
  return (
    <View style={globalStyles.buttonContainer}>
      <Btn icon="add-circle-outline"></Btn>
      <Btn icon="remove-circle-outline"></Btn>
    </View>
  );
}
