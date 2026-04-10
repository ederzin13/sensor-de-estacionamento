import { View, Text, TextInput, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { globalStyles } from "../styles/globalStyles";
import Title from "./Title";
import Display from "./Display";

export default function Sensor() {
  const [loading, setLoading] = useState<boolean>(true);
  const [distance, setDistance] = useState<number>(100);

  useEffect(() => {
    if (loading) console.log("Sistema de sensores iniciando...");

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  //gera mensagens muito rápido
  // useEffect(() => {
  //   const alive = setInterval(() => {
  //     console.log("Averiguando...");
  //   }, 2000);
  // }, [!loading]);

  if (loading) return <ActivityIndicator size="large"></ActivityIndicator>;

  return (
    <View style={[globalStyles.container, globalStyles.center]}>
      <Title></Title>
      <Display value={distance}></Display>
    </View>
  );
}
