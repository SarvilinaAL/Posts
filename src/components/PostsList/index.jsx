import React from 'react';
import { Grid } from '@mui/material';
import { Post } from '../Post';

export const PostsList = ({ postsData }) => {
    return (
        <Grid container spacing={2}>
            {postsData.map(post => <Post key={post._id} {...post} />)}
        </Grid>
    );
};