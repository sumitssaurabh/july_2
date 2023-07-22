import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Book from './Book';


const BookList = () => {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      const fetchBooks = async () => {
        try {
          const response = await axios.get(
            'https://www.googleapis.com/books/v1/volumes?q=harry+potter'
          );
          setBooks(response.data.items);
        } catch (error) {
          console.error('Error fetching books:', error);
        }
      };
  
      fetchBooks();
    }, []);
  
    return (
      <div>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    );
  };
  
  export default BookList;
  