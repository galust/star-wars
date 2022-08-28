import React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { useAppSelector } from '../../redux/hooks';
import { charactersSel } from '../../redux/characters';

import Card from './Card';
import CardSkeleton from './CardSkeleton';

import './Characters.scss';

const CharactersList = () => {
    const isLoading = useAppSelector(charactersSel.selectLoading);
    const characters = useAppSelector(charactersSel.selectCharacters);
    return (
        <Box className="characters-list" minHeight="300" my={[3, 4, 4, 8]}>
            {isLoading || !characters ? (
                <CardSkeleton />
            ) : !characters.length ? (
                <div className="characters-not-found">No Characters Found...</div>
            ) : (
                <Grid container spacing={2}>
                    {characters.map((item) => {
                        return (
                            <Grid item key={item.name} xs={12} sm={6} md={3} lg={2.4}>
                                <Card item={item} />
                            </Grid>
                        );
                    })}
                </Grid>
            )}
        </Box>
    );
};

export default CharactersList;
