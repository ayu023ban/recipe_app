import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { recipe_url_base } from "../api_urls";
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
export default RecipeList;
