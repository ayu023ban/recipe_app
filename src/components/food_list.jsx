import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import FoodCard from "./food_card";
class FoodList extends Component {
  render() {
    let { list } = this.props;
    let snippet =
      list !== null ? (
        list.length > 0 ? (
          list.map((food) => <FoodCard food={food} key={food.food.foodId} />)
        ) : (
          <p>food is not available</p>
        )
      ) : (
        <p>loading</p>
      );
    return (
      <Grid textAlign="justified" style={{ justifyContent: "space-evenly" }}>
        {snippet}
      </Grid>
    );
  }
}
export default FoodList;
