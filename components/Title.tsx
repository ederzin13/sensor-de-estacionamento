import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../styles/globalStyles";
import Ionicons, {
  IoniconsIconName,
} from "@react-native-vector-icons/ionicons";

type TitleProps = {
  icon: IoniconsIconName;
};

export default function Title({ icon }: TitleProps) {
  return (
    <View>
      <Ionicons name={icon} style={globalStyles.title}></Ionicons>
    </View>
  );
}
