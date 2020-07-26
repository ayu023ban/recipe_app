import React, { Component } from "react";
import { Card, Image, Icon, Label } from "semantic-ui-react";

class FoodCard extends Component {
  render() {
    let food = {
      "2": {
        food: {
          foodId: "food_bjieg5gbyb06m4br9uxa0bnhpmex",
          uri: "http://www.edamam.com/ontologies/edamam.owl#Food_INR_FP537910",
          label: "Swad Corn Poha",
          foodlabel: "High Protein",
          nutrients: {
            ENERC_KCAL: 367.85703175991,
            PROCNT: 7.0547923899160825,
            FAT: 1.007827484273726,
            CHOCDF: 82.64185371044553,
            FIBTG: 5.03913742136863,
          },
          brand: "Swad",
          category: "Packaged foods",
          categoryLabel: "food",
          foodContentsLabel: "Corn",
          image:
            "https://www.edamam.com/food-img/534/534437d9e941b4cca8b8859556bdcf99.png",
        },
        measures: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
            label: "Serving",
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
            label: "Package",
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
            label: "Ounce",
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
            label: "Pound",
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
            label: "Kilogram",
          },
        ],
      },
    };
    food = food["2"];

    let image = food.food.image && (
      <Image src={food.food.image} wrapped ui={false} />
    );
    let foodlabelcolor;
    switch (food.food.foodlabel) {
      case "High Protein":
        foodlabelcolor = "red";
        break;
      case "High Carb":
        foodlabelcolor = "red";
        break;
      case "Balanced":
        foodlabelcolor = "green";
        break;
      case "Regular":
        foodlabelcolor = "yellow";
        break;
    }
    return (
      <Card>
        {image}
        <Card.Content>
          <Card.Header>
            {food.food.brand}-{food.food.label}
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Description>
            <b>Energy: {Math.round(food.food.nutrients.ENERC_KCAL)} kcal</b> 
            <br />
            <b>Protein:</b> {Math.round(food.food.nutrients.PROCNT)} g<br />
            <b>Fat:</b> {Math.round(food.food.nutrients.FAT)} g<br />
            <b>Carbohydrates:</b> {Math.round(food.food.nutrients.CHOCDF)} g{" "}
            <br />
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <Label attached="bottom" style={{textAlign:'center'}} color={foodlabelcolor}>
            {food.food.foodlabel}
          </Label>
        </Card.Content>
      </Card>
    );
  }
}
export default FoodCard;
