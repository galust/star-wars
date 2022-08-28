import React from 'react';

import Box from '@mui/material/Box';
import MUIPagination from '@mui/material/Pagination';

import { useAppSelector } from '../../redux/hooks';
import { charactersSel } from '../../redux/characters';

import { CHARACTERS_LIST_PAGE_COUNT } from '../../constants/constants';

interface PaginationProps {
    page: number;
    callback: (p: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page = 1, callback }) => {
    const pageCount = useAppSelector(charactersSel.selectCount);

    if (!pageCount) return null;

    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        callback(page);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <MUIPagination
                page={page}
                onChange={handleChange}
                count={Math.ceil(pageCount / CHARACTERS_LIST_PAGE_COUNT)}
            />
        </Box>
    );
};

export default Pagination;
