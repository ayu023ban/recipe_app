import React, { Component } from "react";
import { Segment, Input } from "semantic-ui-react";
import { withRouter } from "react-router";
import Filter from "./filter";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { search_value: "" };
    this.searchValueChangeHandler = this.searchValueChangeHandler.bind(this);
  }
  searchValueChangeHandler(value, target) {
    this.setState({ search_value: target.value });
  }
  handleSearchClick() {
    this.props.history.push({
      path: `fdsa/?search=${this.state.search_value}`,
      state: { search: this.state.search_value },
    });
  }
  render() {
    return (
      <Segment textAlign='center'>
        search food or recipe:{" "}
        <Input
          action={{
            icon: "search",
            content: "search",
            onClick: () => this.handleSearchClick(),
          }}
          placeholder="Search..."
          value={this.state.search_value}
          onChange={this.searchValueChangeHandler}
        />
        <Filter onFilterChange={this.props.onFilterChange}/>
      </Segment>
    );
  }
}

export default withRouter(Search);
