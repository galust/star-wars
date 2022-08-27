import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { fetchCharacterById } from '../../redux/characters/operations';
import charactersSlice from '../../redux/characters';

import Box from '@mui/material/Box';
import StarShips from '../../components/StarShips';
import starshipsSlice from '../../redux/starships';
import Vehicles from '../../components/Vehicles';
import PersonalInfo from '../../components/PersonalInfo';
import BackButton from '../../components/BackButton';

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
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <BackButton />
                <PersonalInfo />
                <StarShips />
                <Vehicles />
            </Box>
        </div>
    );
};

export default InnerPage;
