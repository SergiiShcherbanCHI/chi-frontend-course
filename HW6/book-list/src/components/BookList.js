import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BookList.css';

const books = [
    { id: 1, name: 'To Kill a Mockingbird', author: 'Harper Lee', rating: 4.8 },
    { id: 2, name: '1984', author: 'George Orwell', rating: 4.7 },
    { id: 3, name: 'The Great Gatsby', author: 'F. Scott Fitzgerald', rating: 4.5 },
    { id: 4, name: 'The Catcher in the Rye', author: 'J.D. Salinger', rating: 4.3 },
    { id: 5, name: 'Pride and Prejudice', author: 'Jane Austen', rating: 4.6 },
];

const BookList = () => {
    return (
        <div className="book-list">
            <h1>Book List</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <Link to={`/book/${book.id}`}>
                            {book.name} by {book.author} - Rating: {book.rating}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
