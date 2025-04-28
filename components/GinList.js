import React from "react";
import { ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";

const GinList = ({ gins, onSelect }) => (
  <ScrollView style={styles.listContainer}>
    {gins.map((gin, index) => (
      <TouchableOpacity
        key={index}
        style={styles.item}
        onPress={() => onSelect(gin)}
      >
        <Text style={styles.ginName}>{gin.name}</Text>
        <Text style={styles.ginDescription}>{gin.description}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  item: {
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  ginName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  ginDescription: {
    fontSize: 14,
    color: "#555",
  },
});

export default GinList;
