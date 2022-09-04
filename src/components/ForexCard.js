import React from "react";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

const ForexCard = (props) => {
  return (
    <Card
      style={{
        textAlign: "center",
        justifyContent: "center",
        marginLeft: "2rem",
        marginRight: "2rem",
        minWidth: "118px",
      }}
    >
      <Card.Header>{props.to}</Card.Header>
      <Card.Body>
        {props.isLoading ? (
          <Placeholder as={Card.Text} animation="wave">
            <Placeholder xs={6} />
          </Placeholder>
        ) : (
          <Card.Text style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
            {props.quote.toLocaleString("en-US", {
              minimumFractionDigits: 4,
            })}
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
};

export default ForexCard;
