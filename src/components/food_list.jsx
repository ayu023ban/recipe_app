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
          list.map((food) => <FoodCard food={food} key={food.food.foodId} />)
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
