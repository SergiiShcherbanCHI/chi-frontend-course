import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/BookDetail.css';

const books = [
    { id: 1, name: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', rating: 4.8, description: 'A novel about the serious issues of rape and racial inequality.' },
    { id: 2, name: '1984', author: 'George Orwell', genre: 'Dystopian', rating: 4.7, description: 'A story about government surveillance and totalitarianism.' },
    { id: 3, name: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', rating: 4.5, description: 'A critique of the American Dream set in the Roaring Twenties.' },
    { id: 4, name: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', rating: 4.3, description: 'A story about teenage rebellion and angst.' },
    { id: 5, name: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', rating: 4.6, description: 'A romantic novel that critiques the British landed gentry at the end of the 18th century.' },
];

const BookDetail = () => {
    const { id } = useParams();
    const book = books.find(book => book.id === parseInt(id));

    if (!book) {
        return <div>Book not found</div>;
    }

    return (
        <div className="book-detail">
            <h1>{book.name}</h1>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Rating: {book.rating}</p>
            <p>Description: {book.description}</p>
            <img src="https://via.placeholder.com/150" alt="Book cover" />
            <br />
            <Link to="/">Back to Book List</Link>
        </div>
    );
};

export default BookDetail;
