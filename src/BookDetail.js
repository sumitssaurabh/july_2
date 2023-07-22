// src/components/BookDetail.js
import React from 'react';

const BookDetail = ({ book }) => {
  return (
    <div>
      <h2>{book.volumeInfo.title}</h2>
      <p>{book.volumeInfo.description}</p>
      <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
        Read Now
      </a>
      <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
        More Info
      </a>
    </div>
  );
};

export default BookDetail;
