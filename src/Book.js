
import { useState } from "react";
import React from "react";

const Book = ({ book }) => {
  return (
    <div>
      <h2>{book.volumeInfo.title}</h2>
      <p>{book.volumeInfo.authors?.join(', ')}</p>
      <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
    </div>
  );
};

export default Book;