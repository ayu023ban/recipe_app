import React, { Component } from "react";
import { Grid, Loader, Header } from "semantic-ui-react";
import FoodCard from "./food_card";
class FoodList extends Component {
  render() {
    let { list } = this.props;
    let snippet =
      list !== null ? (
        list.length > 0 ? (
          list.map((food) => <FoodCard food={food} key={food.food.foodId} />)
        ) : (
          <Header as="h1" style={{color:"white"}} textAlign="center">food is not available</Header>
        )
      ) : (
        <Loader active>recipes are loading</Loader>
      );
    return (
      <Grid textAlign="justified" style={{ justifyContent: "space-evenly" }}>
        {snippet}
      </Grid>
    );
  }
}
export default FoodList;
