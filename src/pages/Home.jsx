import React, { Component } from "react";
import FoodList from "../components/food_list";
import Search from "../components/Filters";
import { Container } from "semantic-ui-react";
class Home extends Component {
    componentDidUpdate(prevprops){
        if(prevprops.location.state !== this.props.location.state){
            console.log(this.props.location.state)
        }
    }
  render() {
    return (
      <Container>
        <Search />
        <FoodList />
      </Container>
    );
  }
}
export default Home;
