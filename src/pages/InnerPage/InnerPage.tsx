import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from '@mui/material/Container';

import { useAppDispatch } from '../../redux/hooks';
import { fetchCharacterById } from '../../redux/characters/operations';
import charactersSlice from '../../redux/characters';
import starshipsSlice from '../../redux/starships';

import BackButton from '../../components/BackButton';
import PersonalInfo from '../../components/PersonalInfo';
import StarShips from '../../components/StarShips';
import Vehicles from '../../components/Vehicles';

const InnerPage: React.FC = () => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const { id } = params;

    useEffect(() => {
        dispatch(fetchCharacterById(id));
        return () => {
            dispatch(starshipsSlice.actions.resetStore());
            dispatch(charactersSlice.actions.resetStore());
        };
    }, [id]);

    return (
        <Container maxWidth="lg">
            <BackButton />
            <PersonalInfo />
            <StarShips />
            <Vehicles />
        </Container>
    );
};

export default InnerPage;
