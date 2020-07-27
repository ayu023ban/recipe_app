import React, { Component } from "react";
import { Card, Image, Icon, Label, Button, Statistic } from "semantic-ui-react";
import food_template_image from '../assets/images/food_plate_template_image.png'
class RecipeCard extends Component {
  render() {
    let { recipe } = this.props;
    let img_src = recipe.recipe.image || food_template_image
    let recipe_label_snippet = recipe.recipelabel.map((label, index) => (
      <Label key={index} horizontal color={label.color}>
        {label.label}
      </Label>
    ));
    return (
      <Card>
        <Image src = {img_src} wrapped ui = {false}/>
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
          {recipe_label_snippet}
        </Card.Content>
      </Card>
    );
  }
}
export default RecipeCard;
