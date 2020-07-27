import React, { Component } from "react";
import { Grid, Loader,Header } from "semantic-ui-react";
import RecipeCard from "./recipi_card";
class RecipeList extends Component {

  render() {
    let { list } = this.props;
    let snippet =
      list !== null ? (
        list.length > 0 ? (
          list.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe.recipeid} />
          ))
        ) : (
          <Header as="h1" style={{color:"white"}} textAlign="center">recipies are not available</Header>
        )
      ) : (
        <Loader active>recipes are loading</Loader>
      );
    return (
      <Grid textAlign="justified" style={{justifyContent:"space-evenly"}}>{snippet}</Grid>
    );
  }
}
export default RecipeList;
