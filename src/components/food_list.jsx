import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import FoodCard from "./food_card";
import { food_url } from "../api_urls";
class FoodList extends Component {
  render() {
    let { list } = this.props;
    let snippet =
      list !== null ? (
        list.length > 0 ? (
          list.map((food) => {
            let label = [];
            let protein_ratio = food.food.nutrients.PROCNT;
            let carb_fat_ratio =
              (food.food.nutrients.FAT + food.food.nutrients.CHOCDF)
            if (protein_ratio > 15) {
              label.push({label:"High Protein",color:"green"});
            } else if (protein_ratio > 12) {
              label.push({label:"Balanced",color:"green"});
            }
            if (carb_fat_ratio > 50) {
              label.push({label:"High Carb",color:"red"});
            }
            if (label.length === 0) {
              label.push({label:"Regular",color:"yellow"});
            }
            food = { ...food, foodlabel: label };
            return <FoodCard food={food} key={food.food.foodId} />;
          })
        ) : (
          <p>recipies are not available</p>
        )
      ) : (
        <p>loading</p>
      );
    return (
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          justifyContent: "space-evenly",
        }}
      >
        {snippet}
      </Container>
    );
  }
}
export default FoodList;
