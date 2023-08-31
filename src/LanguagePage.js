import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom'; // Import the Link component

function LanguagePage() {
  const languages = [
    { id: 1, name: 'Marathi', image: '/Images/marathi.jpg' },
    { id: 2, name: 'English', image: '/Images/english.jpg' },
    { id: 3, name: 'Bangla', image: '/Images/bangla.png' },
    { id: 4, name: 'Kannada', image: '/Images/kannada.jpg' }
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageClick = (languageId) => {
    setSelectedLanguage(languageId);
  };

  return (
    <div className='LanguagePage'>
      <div style={{ textAlign: 'center' }}>
        <h1><i>Select Language</i></h1><br />
      </div>
      <div>
        <Row xs={2} md={4} className="g-4">
          {languages.map((language) => (
            <Col key={language.id}>
              <Card className="custom-card" onClick={() => handleLanguageClick(language.id)}>
                <Link to={`/EbooksOf${language.name}`}>
                  <Card.Img className="img card-img-animation" variant="top" src={language.image} />
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default LanguagePage;
