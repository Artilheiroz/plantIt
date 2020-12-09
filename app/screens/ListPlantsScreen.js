import React from "react";
import { View } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import data from "../data/DummyData";
import { Button } from "galio-framework";

const tableHead = [
  "Código",
  "Nome",
  "Tipo",
  "Temperatura Ideal ",
  "Humidade Ideal",
];

let dados = [];

const loadData = () => {
  dados = data.plants.map((plant) => [
    plant.key,
    plant.name,
    plant.type,
    plant.idealTemperature,
    plant.idealHumidity,
  ]);
};

loadData();

function ListPlantsScreen({ navigation }) {
  return (
    <View>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row data={tableHead} />
        <Rows data={dados} />
      </Table>
      <TouchableWithoutFeedback onPress={() => loadData()}>
        <Button round color="#2DCA66">
          Reload Table
        </Button>
      </TouchableWithoutFeedback>
    </View>
  );

  componentDidMount = () => {
    const { navigation } = this.props;
    navigation.addListener("willFocus", () => loadData);
  };
}

export default ListPlantsScreen;
