import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GinDetailScreen = ({ route }) => {
  const { gin } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{gin.name}</Text>
      <Text style={styles.description}>{gin.description}</Text>
      <Text style={styles.recipe}>Рецепт: {gin.recipe}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
  },
  recipe: {
    fontSize: 18,
    fontStyle: "italic",
  },
});

export default GinDetailScreen;
