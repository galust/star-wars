import React, { useEffect, useState } from 'react';

import Container from '@mui/material/Container';

import { useAppDispatch } from '../../redux/hooks';
import { fetchCharacters } from '../../redux/characters/operations';

import Search from '../../components/Search/Search';
import CharactersList from './CharactersList';
import Pagination from '../../components/Pagination';

const Characters: React.FC = () => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const dispatch = useAppDispatch();
    useEffect((): void => {
        dispatch(fetchCharacters({ page: page, search: search }));
    }, [dispatch, page, search]);

    const handleSearch = (term: string) => {
        setSearch(term);
        setPage(1);
    };

    return (
        <Container maxWidth="lg">
            <Search callback={handleSearch} />
            <CharactersList />
            <Pagination page={page} callback={setPage} />
        </Container>
    );
};

export default Characters;
