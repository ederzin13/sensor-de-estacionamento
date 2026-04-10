import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../styles/globalStyles";

type DisplayProps = {
  value: number;
};

export default function Display({ value = 0 }: DisplayProps) {
  return (
    <View style={[globalStyles.displayContainer, globalStyles.center]}>
      <Text style={globalStyles.displayText}>{value} cm</Text>
    </View>
  );
}
