import React from "react";
import { View, SafeAreaView } from "react-native";
import { Button, Text } from "galio-framework";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import styles from "../style/GlobalStyleSheet";

function MainMenu({ navigation }) {
  return (
    <SafeAreaView style={styles.mainMenu}>
      <Text bold style={styles.title}>
        Selecione uma opção
      </Text>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("ConfigurePlantation")}
      >
        <Button round color="#2DCA66">
          Configurar Horta
        </Button>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => navigation.navigate("AddPlant")}>
        <Button round color="#2DCA66">
          Adicionar Planta
        </Button>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("ListPlants")}
      >
        <Button round color="#2DCA66">
          Listar Plantas
        </Button>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("ListPlants")}
      >
        <Button round color="#2DCA66">
          Histórico
        </Button>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("ListPlants")}
      >
        <Button round color="#2DCA66">
          Status Atual da Horta
        </Button>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default MainMenu;
