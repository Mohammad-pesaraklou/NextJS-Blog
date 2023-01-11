import React from 'react';
import { CircularProgress } from '@mui/material'
const Loader = () => {
    return (
        <div>
            <CircularProgress color="warning" size="lg" />
        </div>
    );
};

export default Loader;