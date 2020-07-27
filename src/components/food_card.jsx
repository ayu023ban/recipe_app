import React, { Component } from "react";
import { Card, Image, Icon, Label } from "semantic-ui-react";
import food_template_image from '../assets/images/food_plate_template_image.png'
class FoodCard extends Component {
  render() {
    let { food } = this.props;
    let img_src = food.food.image || food_template_image
      
    let food_label_snippet = food.foodlabel.map((label,index) => (
      <Label key={index} horizontal color={label.color}>
        {label.label}
      </Label>
    ));
    return (
      <Card data-aos = "fade-left" data-aos-duration="500" >
        <Image src={img_src} wrapped ui={false} />
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
