import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Dropdown  } from "react-bootstrap";
function Product()
{
    return(
        <div>
              

    <div>
    <div className="Product">
      <Container>
        <Row>
          <Col md={4}>
            <Card className='card-container'>
              <a href="/EBookShowByCard">
                <Card.Img className="Cardimg" variant="top" src="/Images/Ebook.jpg" />
              </a>
              <Card.Body>
                <Card.Title>eBooks</Card.Title>
                {/* <Card.Text>Id</Card.Text> */}
                <br/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='card-container'>
              <a href="/Music">
                <Card.Img className="Cardimg" variant="top" src="/Images/music.jpg" />
              </a>
              <Card.Body>
                <Card.Title>Music</Card.Title>
                {/* <Card.Text>Id</Card.Text> */}
                <br/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='card-container'>
              <a href="/Videos">
                <Card.Img className="Cardimg" variant="top" src="/Images/video.jpg" />
              </a>
              <Card.Body>
                <Card.Title>Videos</Card.Title>
                {/* <Card.Text>Id</Card.Text> */}
                <br/>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    

    </div>
        </div>
    )
}
export default Product