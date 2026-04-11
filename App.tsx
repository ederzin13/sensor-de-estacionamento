import { StyleSheet, Text, View } from "react-native";
import FullScreen from "./wrappers/FullScreen";
import Sensor from "./components/Sensor";

export default function App() {
  return (
    <FullScreen>
      <Sensor></Sensor>
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
