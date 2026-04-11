import { View, ActivityIndicator, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { globalStyles } from "../styles/globalStyles";
import Title from "./Title";
import Display from "./Display";
import BtnContainer from "./BtnContainer";
import Btn from "./Btn";
import Activate from "./Activate";

export default function Sensor() {
  const [loading, setLoading] = useState<boolean>(true);
  const [distance, setDistance] = useState<number>(100);

  useEffect(() => {
    if (loading) console.log("Sistema de sensores iniciando...");

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (distance <= 20) Alert.alert("⚠️ PERIGO: Muito Próximo!");
  }, [distance]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Averiguando...");
    }, 2000);

    return () => {
      console.log("Parando sensores!");
      clearInterval(interval);
    };
  }, []);

  if (loading) return <ActivityIndicator size="large"></ActivityIndicator>;

  return (
    <View style={[globalStyles.container, globalStyles.center]}>
      <Title icon={distance > 20 ? "wifi" : "warning"}></Title>
      <Display value={distance}></Display>
      <BtnContainer>
        <Btn
          icon="add-circle-outline"
          setDistance={() => {
            setDistance(distance + 10);
          }}
        ></Btn>
        <Btn
          icon="remove-circle-outline"
          setDistance={() => {
            setDistance(distance - 10);
          }}
        ></Btn>
      </BtnContainer>
    </View>
  );
}
