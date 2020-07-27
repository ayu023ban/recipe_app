import React, { Component } from "react";
import FoodList from "../components/food_list";
import Search from "../components/search";
import { food_url_base, recipe_url_base } from "../api_urls";
import { Container, Segment } from "semantic-ui-react";
import Filter from "../components/filter";
import RecipeList from "../components/recipe_list";
class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      food_list: null,
      recipe_list: null,
      food_list_after_filter: null,
      recipe_list_after_filter: null,
    };
    this.filterChangeHandler = this.filterChangeHandler.bind(this)
  }
  async componentDidUpdate(prevprops) {
    if (prevprops !== this.props) {
      let oldSearch =
        prevprops.location.state && prevprops.location.state.search;
      let newSearch =
        this.props.location.state && this.props.location.state.search;
        console.log(oldSearch,newSearch)
      if (prevprops.location.state !== this.props.location.state) {
        if (newSearch === "") {
          this.setState({ food_list: null, recipe_list: null });
        } else if (oldSearch !== newSearch) {
          let food_url = food_url_base + `&ingr=${newSearch}`;
          let recipe_url = recipe_url_base + `&q=${newSearch}`;
          this.getContentOfFood(food_url);
          this.getContentOfRecipe(recipe_url);
        }
      }
    }
  }

  async getContentOfFood(food_url) {
    let food_res = await fetch(food_url);
    if (food_res.status === 200) {
      food_res = await food_res.json();
      let food_list = food_res.hints;
      food_list = this.addLabelToFood(food_list);
      await this.setState({ food_list: food_list });
    } else console.log(food_res);
  }

  async getContentOfRecipe(recipe_url) {
    let recipe_res = await fetch(recipe_url);
    if (recipe_res.status === 200) {
      recipe_res = await recipe_res.json();
      let recipe_list = recipe_res.hits;
      recipe_list = this.addLabelToRecipe(recipe_list);
      await this.setState({ recipe_list: recipe_list });
    } else console.log(recipe_res);
  }
  addLabelToFood(food_list) {
    let new_list = food_list.map((food) => {
      let label = [];
      let protein_ratio = food.food.nutrients.PROCNT;
      let carb_fat_ratio = food.food.nutrients.FAT + food.food.nutrients.CHOCDF;
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
      return { ...food, foodlabel: label };
    });
    return new_list;
  }
  addLabelToRecipe(recipe_list) {
    let new_list = recipe_list.map((recipe) => {
      let label = [];
      let protein_ratio = recipe.recipe.totalNutrients.PROCNT.quantity;
      let carb_fat_ratio =
        recipe.recipe.totalNutrients.FAT.quantity +
        recipe.recipe.totalNutrients.CHOCDF.quantity;
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
      return { ...recipe, recipelabel: label };
    });
    return new_list;
  }

  filterChangeHandler(filter_list) {
    let { food_list, recipe_list } = this.state;
    if (filter_list.length === 0) {
      this.setState({
        food_list_after_filter: food_list,
        recipe_list_after_filter: recipe_list,
      });
    }
  }

  render() {
    return (
      <Container>
        <Segment textAlign="center">
          <Search onFilterChange={this.filterChangeHandler} />
          <Filter onFilterChange={this.filterChangeHandler} />
        </Segment>
        {this.state.food_list && <FoodList list={this.state.food_list} />}
        {this.state.recipe_url_base && <RecipeList />}
      </Container>
    );
  }
}
export default Home;
