import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import { useAppSelector } from '../../redux/hooks';
import { starshipsSel } from '../../redux/starships';

import { StarshipFields } from '../../pages/InnerPage/fields';

import InnerPageSkeleton from '../../pages/InnerPage/InnerPageSkeleton';

import './../../pages/InnerPage/InnerPage.scss';

const StarShips: React.FC = () => {
    const starships = useAppSelector(starshipsSel.selectStarShips);
    const isLoading = useAppSelector(starshipsSel.selectLoading);

    if (isLoading) {
        return (
            <Box my={2}>
                <InnerPageSkeleton />
            </Box>
        );
    } else if (!starships || !starships.length) {
        return null;
    }

    return (
        <Box className="card-info" sx={{ borderRadius: '12px' }} p={2} my={2}>
            <Typography className="card-info-title">Starships</Typography>
            <TableContainer>
                <Table className="card-info-list">
                    <TableBody>
                        {StarshipFields.map((field) => {
                            return (
                                <TableRow key={field}>
                                    <TableCell>
                                        <Box component="span" className="text-capitalize">
                                            {field.replaceAll('_', ' ')}
                                        </Box>
                                    </TableCell>
                                    {starships.map((starship) => {
                                        return (
                                            <TableCell key={starship.name}>
                                                <Box key={starship.name}>{starship[field]}</Box>
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default StarShips;
