import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../styles/globalStyles";

export default function Title() {
  return (
    <View>
      <Text style={globalStyles.title}>Sensor de estacionamento</Text>
    </View>
  );
}
