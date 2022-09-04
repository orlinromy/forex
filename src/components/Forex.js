import React, { useEffect, useState } from "react";
import axios from "axios";
import ForexCard from "./ForexCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Forex = (props) => {
  const [forexData, setForexData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  async function getLiveForexData() {
    setIsLoading(true);
    try {
      const data = await axios.get(
        "/live?access_key=b5847a6283683681189fedff3e3169e5"
      );
      setForexData(data.data);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }

  async function getHistForexData(date) {
    setIsLoading(true);
    try {
      const data = await axios.get(
        `/historical?access_key=b5847a6283683681189fedff3e3169e5&date=${
          new Date(date).toISOString().split("T")[0]
        }`
      );
      setForexData(data.data);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }

  useEffect(() => {
    if (!props.date) {
      getLiveForexData();
    } else {
      getHistForexData(props.date);
    }
  }, [props.date]);

  const convertTo = [
    "USD",
    "CAD",
    "HKD",
    "PHP",
    "HUF",
    "AUD",
    "JPY",
    "CNY",
    "MXN",
    "MYR",
    "KRW",
    "NZD",
  ];

  return (
    <Container>
      <Row className="align-items-center">
        {convertTo.map((forex, idx) => {
          return (
            <Col
              key={idx}
              sm={3}
              className="justify-content-md-center"
              style={{ paddingBottom: "2rem" }}
            >
              <ForexCard
                key={idx}
                to={forex}
                quote={
                  isLoading
                    ? 0
                    : forex === "USD"
                    ? 1
                    : forexData.quotes["USD" + convertTo[idx]]
                }
                isLoading={isLoading}
              ></ForexCard>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Forex;
