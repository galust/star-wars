import React from 'react';

import MUIPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useAppSelector } from '../../redux/hooks';
import { charactersSel } from '../../redux/characters';
import { CHARACTERS_LIST_PAGE_COUNT } from '../../constants/constants';

interface PaginationProps {
    page: number;
    callback: (p: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page = 1, callback }) => {
    const pageCount = useAppSelector(charactersSel.selectCount);
    const isLoading = useAppSelector(charactersSel.selectLoading);

    if (isLoading || !pageCount) return null;

    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        callback(page);
    };

    return (
        <Stack spacing={2}>
            <MUIPagination
                color="primary"
                page={page}
                onChange={handleChange}
                count={Math.ceil(pageCount / CHARACTERS_LIST_PAGE_COUNT)}
            />
        </Stack>
    );
};

export default Pagination;
