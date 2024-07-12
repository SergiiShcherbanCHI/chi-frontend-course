// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<BookList />} />
                <Route path="/book/:id" element={<BookDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
