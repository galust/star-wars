import React from 'react';
import Typography from '@mui/material/Typography';
import { useAppSelector } from '../../redux/hooks';
import { starshipsSel } from '../../redux/starships';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import { StarshipFields } from '../../pages/InnerPage/fields';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Skeleton from './Skeleton';

const StarShips: React.FC = () => {
    const starships = useAppSelector(starshipsSel.selectStarShips);
    const isLoading = useAppSelector(starshipsSel.selectLoading);

    if (isLoading) {
        return <Skeleton />;
    } else if (!starships || !starships.length) {
        return null;
    }

    return (
        <div>
            <Typography variant="h5">Starships</Typography>
            <div>
                <TableContainer>
                    <Table sx={{ maxWidth: 650 }}>
                        <TableBody>
                            {StarshipFields.map((field) => {
                                return (
                                    <TableRow key={field}>
                                        <TableCell>{field}</TableCell>
                                        {starships.map((starship) => {
                                            return (
                                                <TableCell key={starship.name}>
                                                    {starship[field]}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default StarShips;
