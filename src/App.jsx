import { Container } from '@mui/material';
import React, { useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PostsList } from './components/PostsList';
import { postData } from './posts';

export const App = () => {
    const [posts, setPosts] = useState(postData);
    return (
        <>
            <Header />
            <Container>
                <PostsList postsData={posts} />
            </Container>
            <Footer />
        </>
    );
};