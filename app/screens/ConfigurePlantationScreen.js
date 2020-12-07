import React from "react";
import { View, TextInput, TouchableWithoutFeedback } from "react-native";
import { Button } from "galio-framework";
import { Formik } from "formik";

import styles from "../style/GlobalStyleSheet";

function ConfigurePlantationScreen({ navigation }) {
  return (
    <View style={styles.mainMenu}>
      <Formik
        initialValues={{
          name: "",
          plantType: "",
          amount: "",
        }}
        onSubmit={(values) => {}}
      >
        {(formikProps) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Nome da Horta"
              onChangeText={formikProps.handleChange("name")}
              value={formikProps.values.name}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Tipo de Planta"
              onChangeText={formikProps.handleChange("plantType")}
              value={formikProps.values.plantType}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Quantidade"
              onChangeText={formikProps.handleChange("amount")}
              value={formikProps.values.amount}
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

export default ConfigurePlantationScreen;
