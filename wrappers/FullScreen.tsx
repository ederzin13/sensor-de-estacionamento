import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { globalStyles } from "../styles/globalStyles";

type FullScreenProps = {
  children: React.ReactNode;
};

export default function FullScreen({ children }: FullScreenProps) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[globalStyles.container, globalStyles.center]}>
        {children}
      </SafeAreaView>
      <StatusBar style="auto"></StatusBar>
    </SafeAreaProvider>
  );
}
