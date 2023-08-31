import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import EbookData from './DataCenter/EbooksData';
import Container from "react-bootstrap/Container";

function BookList() {
  const [books, setBooks] = useState([]);
  const [categorySearch, setCategorySearch] = useState('');
  const [languageSearch, setLanguageSearch] = useState('');

  const handleCategorySearch = (event) => {
    setCategorySearch(event.target.value);
  };

  const handleLanguageSearch = (event) => {
    setLanguageSearch(event.target.value);
  };

  useEffect(() => {
   setBooks([...EbookData]);  
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const filteredBooks = books.filter((book) =>
    (book.category && book.category.toLowerCase().includes(categorySearch.toLowerCase())) &&
    (book.title && book.title.toLowerCase().includes(languageSearch.toLowerCase()))
  );

  return (
    <div>
     <div>
     <Form>
      <Row>
        <Col>
          <Form.Control type="text" style={{ marginLeft: '9rem' }}
          placeholder="Search by Language"
          value={languageSearch}
          onChange={handleLanguageSearch} />
        </Col>
        <Col>
          <Form.Control type="text" style={{ marginLeft: '8rem' }}
          placeholder="Search by Category"
          value={categorySearch}
          onChange={handleCategorySearch}/>
        </Col>
      </Row>
    </Form>
     </div>
      <div>

      </div>
      <ul>
        {filteredBooks.map((book, index) => (
          <li key={index}>
            <strong>{book.title}</strong>
            <p>Category: {book.category || 'N/A'}, Language: {book.title || 'N/A'}</p>
            <p> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={books.image} />
      <Card.Body>
        <Card.Title>{books.title}</Card.Title>
        <Card.Title>{books.description}</Card.Title>    
      </Card.Body>
    </Card></p>

          </li>
        ))}
      </ul>


    </div>
  );
}

export default BookList;
