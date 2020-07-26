import React, { Component } from "react";
import { Card, Image, Icon, Label } from "semantic-ui-react";

class FoodCard extends Component {
  render() {
    let { food } = this.props;
    let image = food.food.image && (
      <Image src={food.food.image} wrapped ui={false} />
    );
    let food_label_snippet = food.foodlabel.map((label,index) => (
      <Label key={index} horizontal color={label.color}>
        {label.label}
      </Label>
    ));
    return (
      <Card>
        {image}
        <Card.Content>
          <Card.Header>
            {food.food.brand}-{food.food.label}
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Description>
            <b>Energy: {Math.round(food.food.nutrients.ENERC_KCAL)} kcal</b>
            <br />
            <b>Protein:</b> {Math.round(food.food.nutrients.PROCNT)} g<br />
            <b>Fat:</b> {Math.round(food.food.nutrients.FAT)} g<br />
            <b>Carbohydrates:</b> {Math.round(food.food.nutrients.CHOCDF)} g{" "}
            <br />
          </Card.Description>
          {food_label_snippet}
        </Card.Content>
      </Card>
    );
  }
}
export default FoodCard;
