import { View, Text, TextInput, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { globalStyles } from "../styles/globalStyles";
import Title from "./Title";

export default function Sensor() {
  const [loading, setLoading] = useState<boolean>(true);
  const [distance, setDistance] = useState<number>(0);

  useEffect(() => {
    if (loading) console.log("Sistema de sensores iniciando...");

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) return <ActivityIndicator size="large"></ActivityIndicator>;

  return (
    <View>
      <Title></Title>
      <TextInput
        placeholder="Digite a distância em cm"
        style={globalStyles.input}
        autoFocus
        keyboardType="numeric"
        // onChangeText={(text) => {
        //   setDistance();
        // }}
      ></TextInput>
    </View>
  );
}
