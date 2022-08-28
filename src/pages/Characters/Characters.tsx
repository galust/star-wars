import React, { useEffect, useState } from 'react';

import Container from '@mui/material/Container';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchCharacters } from '../../redux/characters/operations';
import { charactersSel } from '../../redux/characters';

import Search from '../../components/Search/Search';
import CharactersList from './CharactersList';
import Pagination from '../../components/Pagination';

const Characters: React.FC = () => {
    const characters = useAppSelector(charactersSel.selectCharacters);
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
            <CharactersList items={characters} />
            <Pagination page={page} callback={setPage} />
        </Container>
    );
};

export default Characters;
