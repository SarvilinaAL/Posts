import React from 'react';
import { Button } from '@mui/material';

export const Btn = () => {
    return (
        <Button
            color='inherit'
            onClick={() => {
                console.log('Есть контакт');
            }}
        >Create new post</Button>
    );
};