import React, { useEffect, useState } from "react";
import LoadProduct from "../LoadProduct/LoadProduct";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Container, Form, Row, Button } from "react-bootstrap";
import { FormControl } from "@material-ui/core";

const Home = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("https://gentle-inlet-66634.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <Container>
      <Row className="text-center">
        
        {events.length === 0 && <CircularProgress color="primary" />}
        {events.map((event) => (
          <LoadProduct event={event}></LoadProduct>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
