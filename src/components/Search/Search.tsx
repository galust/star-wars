import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

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
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="search-field" onChange={handleChange} />
            <SearchIcon />
        </Box>
    );
};

export default Search;
