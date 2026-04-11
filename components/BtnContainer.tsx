import { View, Text } from "react-native";
import React from "react";
import Btn from "./Btn";
import { globalStyles } from "../styles/globalStyles";

type BtnContainerProps = {
  children: React.ReactNode;
};

export default function BtnContainer({ children }: BtnContainerProps) {
  return <View style={globalStyles.buttonContainer}>{children}</View>;
}
