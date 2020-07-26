import React, { Component } from "react";
import { Card, Image, Icon, Label, Button, Statistic } from "semantic-ui-react";

class RecipeCard extends Component {
  render() {
    let { recipe } = this.props;
    let image = recipe.recipe.image && (
      <Image src={recipe.recipe.image} wrapped ui={false} />
    );
    let recipelabelcolor;
    switch (recipe.recipe.recipelabelcolor) {
      case "High Protein":
        recipelabelcolor = "red";
        break;
      case "High Carb":
        recipelabelcolor = "red";
        break;
      case "Balanced":
        recipelabelcolor = "green";
        break;
      case "Regular":
        recipelabelcolor = "yellow";
        break;
    }

    return (
      <Card>
        {image}
        <Card.Content>
          <Card.Header>
            <>{recipe.recipe.label}</>
            <Statistic size="mini" color="green" floated="right">
              <Statistic.Value>{recipe.recipe.yield}</Statistic.Value>
              <Statistic.Label>servings</Statistic.Label>
            </Statistic>
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Description>
            <b>
              Energy:{" "}
              {Math.round(recipe.recipe.totalNutrients.ENERC_KCAL.quantity)}{" "}
              kcal
            </b>
            <br />
            <b>Protein:</b>{" "}
            {Math.round(recipe.recipe.totalNutrients.PROCNT.quantity)} g<br />
            <b>Fat:</b> {Math.round(recipe.recipe.totalNutrients.FAT.quantity)}{" "}
            g<br />
            <b>Carbohydrates:</b>{" "}
            {Math.round(recipe.recipe.totalNutrients.CHOCDF.quantity)} g <br />
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <Label
            attached="bottom"
            style={{ textAlign: "center" }}
            color={recipelabelcolor}
          >
            {recipe.recipe.recipelabel}
          </Label>
        </Card.Content>
      </Card>
    );
  }
}
export default RecipeCard;