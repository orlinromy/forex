import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const DateSelector = () => {
  return (
    <div>
      <InputGroup size="md" className="mb-3">
        {/* <InputGroup.Date id="inputGroup-sizing-sm">Small</InputGroup.Date> */}
        <Form.Control type="date" />
        {/* <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        /> */}
      </InputGroup>
    </div>
  );
};

export default DateSelector;
