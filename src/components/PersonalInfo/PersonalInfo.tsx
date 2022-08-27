import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { charactersSel } from '../../redux/characters';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import { DetailsField } from '../../pages/InnerPage/fields';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Skeleton from './Skeleton';

const PersonalInfo: React.FC = () => {
    const character = useAppSelector(charactersSel.selectCurrent);
    const isLoading = useAppSelector(charactersSel.selectLoading);

    if (isLoading) return <Skeleton />;
    else if (!character) return <div>No Info</div>;

    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <img
                    src={character.image}
                    alt="character image"
                    title=" imagecharacter"
                    width="90%"
                />
            </Grid>
            <Grid item xs={8}>
                <Typography variant="h5">Personal Information</Typography>
                <TableContainer>
                    <Table sx={{ maxWidth: 650 }}>
                        <TableBody>
                            {DetailsField.map((row: string) => {
                                return (
                                    <TableRow key={row}>
                                        <TableCell>{row}</TableCell>
                                        <TableCell>{character[row]}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
};

export default PersonalInfo;
