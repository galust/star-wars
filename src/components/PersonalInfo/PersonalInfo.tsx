import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useAppSelector } from '../../redux/hooks';
import { charactersSel } from '../../redux/characters';

import { DetailsField } from '../../pages/InnerPage/fields';

import PersonalInfoSkeleton from './PersonalInfoSkeleton';

import './../../pages/InnerPage/InnerPage.scss';

const PersonalInfo: React.FC = () => {
    const character = useAppSelector(charactersSel.selectCurrent);
    const isLoading = useAppSelector(charactersSel.selectLoading);

    if (isLoading) return <PersonalInfoSkeleton />;
    else if (!character) return null;

    return (
        <Box className="personal-info" my={2}>
            <Box className="card-info-image">
                <img src={character.image} alt="character image" title="character image" />
            </Box>

            <Box className="card-info" sx={{ borderRadius: '12px' }} p={2} width="100%">
                <Typography className="card-info-title">Personal Information</Typography>

                <Box component="ul" className="card-info-list">
                    {DetailsField.map((field: string) => {
                        return (
                            <Box component="li" key={field} sx={{ borderRadius: '12px' }}>
                                <Box component="span" className="text-capitalize">
                                    {field.replaceAll('_', ' ')}
                                </Box>
                                <Box>{character[field]}</Box>
                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </Box>
    );
};

export default PersonalInfo;
