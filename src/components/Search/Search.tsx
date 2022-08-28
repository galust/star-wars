import React from 'react';

import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

import './../../pages/InnerPage/InnerPage.scss';

interface SearchProps {
    callback?: (str: string) => void;
}

let timerFunction: number;

const Search: React.FC<SearchProps> = ({ callback }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        clearTimeout(timerFunction);
        setTimeout(() => {
            if (typeof callback === 'function') {
                callback(event.target.value);
            }
        }, 700);
    };
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            className="search"
            sx={{ display: 'flex', justifyContent: 'center' }}
        >
            <TextField
                id="standard-basic"
                label="Search"
                variant="standard"
                color="secondary"
                onChange={handleChange}
            />
        </Box>
    );
};

export default Search;
