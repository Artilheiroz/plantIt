import * as React from "react";
import { View, Text } from "react-native";
import { AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "@react-navigation/stack";

import MainMenu from "./app/screens/MainMenu";
import ConfigurePlantScreen from "./app/screens/ConfigurePlantScreen";
import ListPlantsScreen from "./app/screens/ListPlantsScreen";
import ConfigurePlantationScreen from "./app/screens/ConfigurePlantationScreen";

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainMenu"
        component={MainMenu}
        options={{
          title: "Menu Principal",
        }}
      />
      <Stack.Screen
        name="AddPlant"
        component={ConfigurePlantScreen}
        options={{
          title: "Cadastro de Planta",
        }}
      />
      <Stack.Screen
        name="ListPlants"
        component={ListPlantsScreen}
        options={{
          title: "Lista de Plantas",
        }}
      />
      <Stack.Screen
        name="ConfigurePlantation"
        component={ConfigurePlantationScreen}
        options={{
          title: "Configuração da Horta",
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
