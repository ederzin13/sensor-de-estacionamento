import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FullScreen from "./wrappers/FullScreen";
import Title from "./components/Title";

export default function App() {
  return (
    <FullScreen>
      <Title></Title>
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
