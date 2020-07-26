import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import FoodCard from "./food_card";
import { recipe_url } from "../api_urls";
import RecipeCard from "./recipi_card";
class RecipiList extends Component {
  state = { list: null };
  async componentDidMount() {
    let url = recipe_url + "&q=poha";
    let res = await fetch(url);
    if (res.status === 200) {
      res = await res.json();
      await this.setState({ list: res.hits });
    } else console.log(res);
  }

  render() {
    let { list } = this.state;
    let snippet =
      list !== null ? (
        list.length > 0 ? (
          list.map(recipe => {
            let label = [];
            let protein_ratio = recipe.recipe.totalNutrients.PROCNT.quantity;
            let carb_fat_ratio =
            recipe.recipe.totalNutrients.FAT.quantity + recipe.recipe.totalNutrients.CHOCDF.quantity;
            if (protein_ratio > 15) {
              label.push({ label: "High Protein", color: "green" });
            } else if (protein_ratio > 12) {
              label.push({ label: "Balanced", color: "green" });
            }
            if (carb_fat_ratio > 50) {
              label.push({ label: "High Carb", color: "red" });
            }
            if (label.length === 0) {
              label.push({ label: "Regular", color: "yellow" });
            }
            recipe = { ...recipe, recipelabel: label };
            return <RecipeCard recipe={recipe} key={recipe.recipeid} />;
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
export default RecipiList;
