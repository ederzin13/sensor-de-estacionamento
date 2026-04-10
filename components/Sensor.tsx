import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/globalStyles";

export default function Sensor() {
  const [distance, setDistance] = useState<number>(0);

  return (
    <View>
      <TextInput
        placeholder="Digite a distância em cm"
        style={globalStyles.input}
        autoFocus
        keyboardType="numeric"
        onChangeText={(text) => {
          setDistance();
        }}
      ></TextInput>
    </View>
  );
}
