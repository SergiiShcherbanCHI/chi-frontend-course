import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
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
        return <Typography variant="h6">Book not found</Typography>;
    }

    return (
        <Container maxWidth="md" sx={{ marginTop: '20px' }}>
            <Box sx={{ mb: 2 }}>
                <Typography variant="h4" align={"center"}>
                    {book.name}
                </Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <img src="https://via.placeholder.com/150" alt="Book cover" style={{ maxWidth: '100%', height: 'auto' }} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="h6">Author:</Typography>
                    <Typography variant="body1">{book.author}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="h6">Genre:</Typography>
                    <Typography variant="body1">{book.genre}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="h6">Rating:</Typography>
                    <Typography variant="body1">{book.rating}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6">Description:</Typography>
                    <Typography variant="body1">{book.description}</Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', marginTop: '20px' }}>
                    <Button variant="contained" color="primary" component={Link} to="/">
                        Back to Book List
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BookDetail;
