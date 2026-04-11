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
};

export default function Btn({ icon }: BtnProps) {
  return (
    <TouchableOpacity style={globalStyles.button}>
      <Pressable>
        <Ionicons name={icon} style={globalStyles.icon}></Ionicons>
      </Pressable>
    </TouchableOpacity>
  );
}
