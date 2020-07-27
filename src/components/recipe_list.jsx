import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
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
          <p>recipies are not available</p>
        )
      ) : (
        <p>loading</p>
      );
    return (
      <Grid textAlign="justified" style={{justifyContent:"space-evenly"}}>{snippet}</Grid>
    );
  }
}
export default RecipeList;
