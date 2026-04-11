import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/globalStyles";

type ActivateProps = {
  setActive: () => void;
};

export default function Activate({ setActive }: ActivateProps) {
  return (
    <TouchableOpacity style={globalStyles.activate} onPress={setActive}>
      <Text style={globalStyles.activateBtnText}>Toggle sensors</Text>
    </TouchableOpacity>
  );
}
