import React from "react";
import { View, Text, TextInput } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Button } from "galio-framework";

import { Formik } from "formik";

import styles from "../style/GlobalStyleSheet";
import data from "../data/DummyData";

function ConfigurePlantScreen({ navigation }) {
  return (
    <View style={styles.mainMenu}>
      <Formik
        initialValues={{
          name: "",
          type: "",
          idealTemperature: "",
          idealHumidity: "",
        }}
        onSubmit={(values) => {
          data.addPlant(values, () => navigation.navigate("MainMenu"));
        }}
      >
        {(formikProps) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Nome da Planta"
              onChangeText={formikProps.handleChange("name")}
              value={formikProps.values.name}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Tipo de Planta"
              onChangeText={formikProps.handleChange("type")}
              value={formikProps.values.type}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Temperatura Ideal"
              onChangeText={formikProps.handleChange("idealTemperature")}
              value={formikProps.values.idealTemperature}
              keyboardType="numeric"
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Humidade Ideal"
              onChangeText={formikProps.handleChange("idealHumidity")}
              value={formikProps.values.idealHumidity}
              keyboardType="numeric"
            ></TextInput>

            <TouchableWithoutFeedback
              onPress={formikProps.handleSubmit}
              style={styles.submitButton}
            >
              <Button color="#2DCA66">Salvar</Button>
            </TouchableWithoutFeedback>
          </View>
        )}
      </Formik>
    </View>
  );
}

export default ConfigurePlantScreen;
