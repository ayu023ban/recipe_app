import React, { Component } from "react";
import { Container, Form } from "semantic-ui-react";
import { Chip } from "@material-ui/core";

var filters = [
  { key: 0, value: "highProteinFilter", text: "High Protein" },
  { key: 0, value: "highCarbFilter", text: "High Carbohydrates" },
  { key: 0, value: "BalancedFilter", text: "Balanced" },
  { key: 0, value: "RegularFilter", text: "Regular" },
];
export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.handleCheckboxchange = this.handleCheckboxchange.bind(this);
    this.state = {
      highProteinFilter: false,
      highCarbFilter: false,
      BalancedFilter: false,
      RegularFilter: false,
      chipsArray:[]
    };
  }
  async handleDelete(x) {
    let fil = filters.find((e) => e.text === x);
    await this.setState({ [fil.value]: false });
    this.filterChips()
    this.props.onFilterChange(this.state.chipsArray)
  }
  async handleCheckboxchange(event, target) {
    let label = target.label;
    let checked = target.checked;
    switch (label) {
      case "Regular":
        await this.setState({
          highCarbFilter: false,
          highProteinFilter: false,
          BalancedFilter: false,
          RegularFilter: checked,
        });
        break;
      case "Balanced":
        await this.setState({
          BalancedFilter: checked,
          highProteinFilter: false,
          RegularFilter: false,
        });
        break;
      case "High Protein":
        await this.setState({
          highProteinFilter: checked,
          BalancedFilter: false,
          RegularFilter: false,
        });
        break;
      case "High Carbohydrates":
        await this.setState({
          highCarbFilter: checked,
          RegularFilter: false,
        });
        break;
    }
    this.filterChips()
    this.props.onFilterChange(this.state.chipsArray);
  }
  filterChips() {
    let chipsArray = [];
    if (this.state.highProteinFilter) chipsArray.push("High Protein");
    if (this.state.highCarbFilter) chipsArray.push("High Carbohydrates");
    if (this.state.BalancedFilter) chipsArray.push("Balanced");
    if (this.state.RegularFilter) chipsArray.push("Regular");
    this.setState({chipsArray:chipsArray})
  }
  renderChips() {
    let chips = this.state.chipsArray.map((chip) => (
      <Chip
        label={chip}
        color="primary"
        onDelete={() => {
          this.handleDelete(chip);
        }}
        variant="outlined"
      ></Chip>
    ));
    return chips;
  }
  render() {
    return (
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "2em",
          }}
        >
          <Form.Checkbox
            onChange={this.handleCheckboxchange}
            inline
            checked={this.state.highProteinFilter}
            label="High Protein"
          />
          <Form.Checkbox
            onChange={this.handleCheckboxchange}
            inline
            checked={this.state.highCarbFilter}
            label="High Carbohydrates"
          />
          <Form.Checkbox
            onChange={this.handleCheckboxchange}
            inline
            checked={this.state.BalancedFilter}
            label="Balanced"
          />
          <Form.Checkbox
            onChange={this.handleCheckboxchange}
            inline
            checked={this.state.RegularFilter}
            label="Regular"
          />
        </div>
        <div style={{ display: "flex" ,justifyContent:"center" }}>{this.renderChips()}</div>
      </Container>
    );
  }
}
