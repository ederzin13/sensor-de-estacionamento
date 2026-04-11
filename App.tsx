import { StyleSheet, Text, View } from "react-native";
import FullScreen from "./wrappers/FullScreen";
import Sensor from "./components/Sensor";
import { useState } from "react";
import Activate from "./components/Activate";

export default function App() {
  const [isActive, setActive] = useState<boolean>(false);

  const handleActivation = () => {
    if (isActive) setActive(false);
    else setActive(true);
  };

  return (
    <FullScreen>
      {isActive && <Sensor></Sensor>}
      <Activate setActive={handleActivation}></Activate>
    </FullScreen>
  );
}
