import React, { Component } from "react";
import { Card, Grid, Container } from "semantic-ui-react";
import FoodCard from "./food_card";
import { food_url } from "../api_urls";
import RecipeCard from "./recipi_card";
class FoodList extends Component {
  state = { list: null };
  async componentDidMount() {
    let url = food_url + "&ingr=poha";
    let res = await fetch(url);
    if (res.status === 200) {
      res = await res.json();
      await this.setState({ list: res.hints });
    } else console.log(res);
  }

  render() {
    let { list } = this.state;
    let snippet =
      list !== null ? (
        list.length > 0 ? (
          list.map((food) => {
            let label = [];
            // let total =
            //   food.food.nutrients.PROCNT +
            //   food.food.nutrients.FAT +
            //   food.food.nutrients.CHOCDF;
            let protein_ratio = food.food.nutrients.PROCNT;
            let carb_fat_ratio =
              (food.food.nutrients.FAT + food.food.nutrients.CHOCDF)
            if (protein_ratio > 15) {
              label.push({label:"High Protein",color:"red"});
            } else if (protein_ratio > 12) {
              label.push({label:"Balanced",color:"green"});
            }
            if (carb_fat_ratio > 50) {
              label.push({label:"High Carb",color:"red"});
            }
            if (label.length == 0) {
              label.push({label:"Regular",color:"yellow"});
            }
            food = { ...food, foodlabel: label };
            return <FoodCard food={food} key={food.foodid} />;
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
