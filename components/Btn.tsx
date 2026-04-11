import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { globalStyles } from "../styles/globalStyles";
import Ionicons, {
  IoniconsIconName,
} from "@react-native-vector-icons/ionicons";

type BtnProps = {
  icon: IoniconsIconName;
  setDistance: () => void;
};

export default function Btn({ icon, setDistance }: BtnProps) {
  return (
    <TouchableOpacity style={globalStyles.button} onPress={setDistance}>
      <Ionicons name={icon} style={globalStyles.icon}></Ionicons>
    </TouchableOpacity>
  );
}
