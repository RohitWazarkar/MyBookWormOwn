import React, { useState, useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EbookData from './DataCenter/EbooksData.js';

// Create a ProductCard component
const ProductCard = ({ product }) => (
   <div className="product" style={{overflow:"clip"}} >
        <div className="image-container">
            <img
                src={product.thumbnailUrl}
                alt={product.title}
                className="product-image"
            />
        </div>
        <h3>{product.title}</h3>
        <h6>{product.authors}</h6>
       <p>Pages:{product.pageCount}</p>
       <p>categories:{product.categories}</p> 
       <p>Price:{product.pages}</p>
       
    </div>
);

const Library = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="library">
      <h1>My Library</h1>
      {isLoading ? (
        <div className="spinner-container">
          <Spinner animation="grow" />;
        </div>
      ) : (
        <div className="card-group">
          {EbookData.map((product) => (
            <Link to={`/DisplayEbook/${product.id}`} key={product.id} className="card-link">
              <div className="card">
                <ProductCard product={product} />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Library;
