import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchCharacters } from '../../redux/characters/operations';
import { charactersSel } from '../../redux/characters';
import CharactersList from './CharactersList';
import Pagination from '../../components/Pagination';
import Search from '../../components/Search/Search';

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
        <>
            <Search callback={handleSearch} />
            <CharactersList items={characters} />
            <Pagination page={page} callback={setPage} />
        </>
    );
};

export default Characters;
