import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Btn } from '../Button';

export const Header = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    Posts
                </Typography>
                <Btn />
            </Toolbar>
        </AppBar>
    );
};