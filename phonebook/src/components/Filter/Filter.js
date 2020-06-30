import React from "react";
//Styles:
import "./Filter.scss";
import { InputGroup, FormControl } from "react-bootstrap";

const Filter = ({ filter, onChange }) => (
  <InputGroup size="sm" className="filter-wrapp">
    <InputGroup.Prepend>
      <InputGroup.Text>Find contact:</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl type="text" name="filter" value={filter} onChange={onChange} />
  </InputGroup>
);

export default Filter;
