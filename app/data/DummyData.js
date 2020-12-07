let plants = [
  {
    key: 0,
    name: "Tomate",
    type: "Fruta",
    idealTemperature: "23",
    idealHumidity: "20",
  },
  {
    key: 1,
    name: "Manjericão",
    type: "Erva",
    idealTemperature: "21",
    idealHumidity: "18",
  },
];

let data = {
  plants: plants,

  addPlant: (plant, callBack) => {
    plant.key = plants.length;
    plants.push(plant);
    console.log(plants);
    callBack();
  },

  getPlants: () => {
    return plants;
  },
};

export default data;
