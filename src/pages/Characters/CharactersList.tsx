import React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { useAppSelector } from '../../redux/hooks';
import { charactersSel } from '../../redux/characters';

import Card from './Card';
import CardSkeleton from './CardSkeleton';

import './Characters.scss';

interface CardsListProps {
    items: { name: string; url: string }[];
}

const CharactersList = ({ items }: CardsListProps) => {
    const isLoading = useAppSelector(charactersSel.selectLoading);

    return (
        <Box className="characters-list" minHeight="300" my={[3, 4, 4, 8]}>
            {isLoading ? (
                <CardSkeleton />
            ) : !items.length ? (
                <div className="characters-not-found">No Characters Found...</div>
            ) : (
                <Grid container spacing={2}>
                    {items.map((item) => {
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
