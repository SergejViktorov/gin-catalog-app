import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import GinDetailScreen from "../screens/GinDetailScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Каталог Джинов" }}
      />
      <Stack.Screen
        name="GinDetail"
        component={GinDetailScreen}
        options={{ title: "Детали Джина" }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default AppNavigator;
