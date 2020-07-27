import React, { Component, createRef } from "react";
import { Menu, Segment, Sticky } from "semantic-ui-react";

class NavBar extends Component {
  contextRef = createRef();
  render() {
    return (
      <Segment style={{marginTop:"0"}} inverted>
        <Menu inverted secondary>
          <Menu.Item
            header
            style={{ fontSize: "2em", margin: "auto" }}
            name="Recipe"
          />
        </Menu>
      </Segment>
    );
  }
}
export default NavBar;
