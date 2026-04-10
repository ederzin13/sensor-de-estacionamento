import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
  },

  center: {
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    height: 50,
    width: 300,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#c0d9b8",
    padding: 15,
    color: "#1f2f18",
  },

  title: {
    fontSize: 22,
    fontWeight: "condensedBold",
  },

  //display
  displayContainer: {
    height: 60,
    width: 90,
    backgroundColor: "#000",
    borderColor: "#a9cfa0",
    borderWidth: 2,
    borderRadius: 10,
  },

  displayText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#45bb00",
  },
});
