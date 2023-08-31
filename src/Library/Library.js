// Library.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Library.css';

// Create a ProductCard component
const ProductCard = ({ product }) => (
    <div className="product">
        <div className="image-container">
            <img
                src={product.imageUrl}
                alt={product.name}
                className="product-image"
            />
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
    </div>
);

const Library = () => {
    const [data] = useState([
        {
            id: 1,
            name: 'Product 1',
            description: 'This is the description for Product 1.',
            imageUrl: 'https://i.guim.co.uk/img/media/9a19fedf27882429f0287ecf5ea24b0e5c582c3f/0_0_2359_3543/master/2359.jpg?width=700&quality=85&auto=format&fit=max&s=36e63d6a1c5bd5cd7df286ab4fe8d011',
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'This is the description for Product 2.',
            imageUrl: 'https://cdn.kobo.com/book-images/233196f9-1586-481b-8e71-f8d08357337b/1200/1200/False/meditations-41.jpg',
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'This is the description for Product 3.',
            imageUrl: 'https://m.media-amazon.com/images/I/41LmPEurOOL.jpg',
        },
        {
            id: 4,
            name: 'Product 4',
            description: 'This is the description for Product 4.',
            imageUrl: 'https://images.ctfassets.net/usf1vwtuqyxm/6S51pK7uwnyhkS9Io9DsAn/320c162c5150f853b8d8568c4715dcef/English_Harry_Potter_7_Epub_9781781100264.jpg?w=914&q=70&fm=jpg',
        },
        {
            id: 5,
            name: 'Product 1',
            description: 'This is the description for Product 1.',
            imageUrl: 'https://i.guim.co.uk/img/media/9a19fedf27882429f0287ecf5ea24b0e5c582c3f/0_0_2359_3543/master/2359.jpg?width=700&quality=85&auto=format&fit=max&s=36e63d6a1c5bd5cd7df286ab4fe8d011',
        },
        {
            id: 6,
            name: 'Product 2',
            description: 'This is the description for Product 2.',
            imageUrl: 'https://cdn.kobo.com/book-images/233196f9-1586-481b-8e71-f8d08357337b/1200/1200/False/meditations-41.jpg',
        },
        {
            id: 7,
            name: 'Product 3',
            description: 'This is the description for Product 3.',
            imageUrl: 'https://m.media-amazon.com/images/I/41LmPEurOOL.jpg',
        },
        {
            id: 8,
            name: 'Product 4',
            description: 'This is the description for Product 4.',
            imageUrl: 'https://images.ctfassets.net/usf1vwtuqyxm/6S51pK7uwnyhkS9Io9DsAn/320c162c5150f853b8d8568c4715dcef/English_Harry_Potter_7_Epub_9781781100264.jpg?w=914&q=70&fm=jpg',
        },
        // Add more sample data here as needed
    ]);

    return (
        <div className="library">
            <h1>My Library</h1>
            <div className="card-group">
                {data.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id} className="card-link">
                        <div className="card">
                            <ProductCard product={product} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};


export default Library;
