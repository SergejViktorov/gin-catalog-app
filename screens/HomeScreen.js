import React from "react";
import { View, Text, StyleSheet } from "react-native";
import GinList from "../components/GinList";

const ginData = [
  {
    name: "Tanqueray",
    description: "Можжевельник и цитрусы.",
    recipe: "Tanqueray + тоник + лед",
  },
  {
    name: "Hendrick's",
    description: "Огурец и роза.",
    recipe: "Hendrick's + тоник + огурец",
  },
  {
    name: "Bombay Sapphire",
    description: "Цитрусы и специи.",
    recipe: "Bombay + лимон + сода",
  },
];

const HomeScreen = ({ navigation }) => {
  const handleSelectGin = (gin) => {
    navigation.navigate("GinDetail", { gin });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Каталог Джинов</Text>
      <GinList gins={ginData} onSelect={handleSelectGin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default HomeScreen;
