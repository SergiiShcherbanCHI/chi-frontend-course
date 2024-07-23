import React from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/BookList.css';

const books = [
    { id: 1, name: 'To Kill a Mockingbird', author: 'Harper Lee', rating: 4.8 },
    { id: 2, name: '1984', author: 'George Orwell', rating: 4.7 },
    { id: 3, name: 'The Great Gatsby', author: 'F. Scott Fitzgerald', rating: 4.5 },
    { id: 4, name: 'The Catcher in the Rye', author: 'J.D. Salinger', rating: 4.3 },
    { id: 5, name: 'Pride and Prejudice', author: 'Jane Austen', rating: 4.6 },
];

const styles = {
    link: {
        textDecoration: 'none',
        color: 'inherit',
    }
};

const BookList = () => {
    return (
        <Container maxWidth="md" sx={{ marginTop: '20px' }}>
            <Typography variant="h4" align={"center"} >
                Book List
            </Typography>
            <Grid container spacing={2} align={"center"}>
                {books.map(book => (
                    <Grid item xs={12} key={book.id}>
                        <Paper sx={{
                            padding: '16px',
                            margin: '8px 0',
                            '&:hover': {
                                backgroundColor: '#f5f5f5',
                            },
                        }}>
                            <Link to={`/book/${book.id}`} style={styles.link}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={4}>
                                        <Typography variant="h6">{book.name}</Typography>
                                    </Grid>
                                    <Grid item xs={6} md={4} mt={'5px'}>
                                        <Typography variant="body1">by {book.author}</Typography>
                                    </Grid>
                                    <Grid item xs={6} md={4} mt={'5px'}>
                                        <Typography variant="body1">Rating: {book.rating}</Typography>
                                    </Grid>
                                </Grid>
                            </Link>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default BookList;
