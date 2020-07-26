import React, { Component } from "react";
import FoodList from "../components/food_list";
import Search from "../components/search";
import { food_url_base, recipe_url_base } from "../api_urls";
import { Container } from "semantic-ui-react";

class Home extends Component {
  state = { food_list: null };
  async componentDidUpdate(prevprops) {
    if (prevprops.location.state !== this.props.location.state) {
      console.log(this.props.location.state);
      let food_url =
        food_url_base + `&ingr=${this.props.location.state.search}`;
      let res = await fetch(food_url);
      if (res.status === 200) {
        res = await res.json();
        await this.setState({ food_list: res.hints });
      } else console.log(res);
    }
  }
  render() {
    return (
      <Container>
        <Search />
        
        <FoodList list={this.state.food_list} />
      </Container>
    );
  }
}
export default Home;
