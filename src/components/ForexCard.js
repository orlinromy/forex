import React from "react";
import Card from "react-bootstrap/Card";

const ForexCard = (props) => {
  return (
    <Card style={{ textAlign: "center" }}>
      <Card.Header>{props.to}</Card.Header>
      <Card.Body>
        <Card.Text style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
          {props.to === "USD"
            ? (1 * 10000) / 10000
            : parseInt(props.quote * 10000) / 10000}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ForexCard;
