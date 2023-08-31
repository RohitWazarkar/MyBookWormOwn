import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EbookData from './DataCenter/EbooksData';

export function DisplayEbook() {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // Find the book with the specified id
    const foundBook = EbookData.find(item => item.id === parseInt(id));

    if (foundBook) {
      setBook(foundBook);
    } else {
      alert("Book not found!!");
    }
  }, [id]);

  return (<div>
    <h1>About {book.title}.....</h1>
    <div className="centered-container">
      <div className="card text-center">
        <div className="card-header">Featured</div>
        <img
          src={book.thumbnailUrl}
          className="card-img-top"
          alt="Book Thumbnail"
        />
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">{book.shortDescription}</p>
          <ul className="list-group list-group-light list-group-small">
          <li className="list-group-item px-4">Pages: {book.pageCount}</li>
          <li className="list-group-item px-4">Authors:{book.authors}</li>
         
          <li className="list-group-item px-4">{book.categories}</li>
          <li className="list-group-item px-4">Vestibulum at eros</li>
        </ul>

          <div>
          <a onClick={AddToShelf} className="btn btn-dark mx-4 my-2">Add To Shelf</a>
          <a onClick={AddToCart} className="btn btn-danger">Add To Cart</a></div>
        </div>
      </div>
    </div></div>
  );
}

function AddToCart()
{
    alert("Adding to cart")
}

function AddToShelf()
{
        alert("adding to shelf")
}