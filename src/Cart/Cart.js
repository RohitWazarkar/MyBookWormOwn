import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import musicdata from "../DataCenter/MusicData";

function MusicCart() {
  const [Products, setProducts] = useState([]);

  const init = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
      });
  };

  useEffect(() => {
    
  }, []);

  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="">
      <Container>
        <Row>
          <Col>
            <h2 style={{ textAlign: "center" }}>Products data ......</h2>
          </Col>
        </Row>
        {/* "title": "Hate Me",
        "artist": "Ellie Goulding",
        "artwork": "https://samplesongs.netlify.app/album-arts/hate-me.jpg",
        "url": "https://samplesongs.netlify.app/Hate%20Me.mp3",
        "id": "4" */}
        <Row xs={1} sm={2} md={3} lg={4} xl={4} gap={3}>
          {musicdata.map((prod) => (
            <Col key={prod.id}>
              <Card className="h-100">
                <div className="d-flex justify-content-center">
                  <Card.Img
                    style={{ maxHeight: '200px', width: 'auto' }}
                    variant="top"
                    src={prod.artwork}
                  />
                </div>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Text>{prod.artist}</Card.Text>
                  </div>
                  <Button href="/Cart" variant="secondary" className="mb-2">Add to Cart</Button>
                  <Button
                    variant="warning"
                    onClick={toggleDescription}
                  >
                    {showDescription ? "Show Less" : "Show More"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default MusicCart;
