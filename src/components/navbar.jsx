import React, { Component, createRef } from "react";
import { Menu, Image, Segment } from "semantic-ui-react";
import logo from "../assets/images/logo.png";
class NavBar extends Component {
  contextRef = createRef();
  render() {
    return (
      <Segment style={{ marginTop: "0" }} inverted>
        <Menu inverted secondary>
          <Menu.Item>
            <Image src={logo} size="tiny" />
          </Menu.Item>
          <Menu.Item header style={{ fontSize: "2em" }} name="Recipe" />
        </Menu>
      </Segment>
    );
  }
}
export default NavBar;
