import React from 'react';
import Typography from '@mui/material/Typography';
import { useAppSelector } from '../../redux/hooks';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import { VehicleFields } from '../../pages/InnerPage/fields';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import { vehiclesSel } from '../../redux/vehicles';
import Skeleton from './Skeleton';

const Vehicles: React.FC = () => {
    const vehicles = useAppSelector(vehiclesSel.selectVehicles);
    const isLoading = useAppSelector(vehiclesSel.selectLoading);

    if (isLoading) {
        return <Skeleton />;
    } else if (!vehicles || !vehicles.length) {
        return null;
    }

    return (
        <div>
            <Typography variant="h5">Vehicles</Typography>
            <div>
                <TableContainer>
                    <Table sx={{ maxWidth: 650 }}>
                        <TableBody>
                            {VehicleFields.map((field) => {
                                return (
                                    <TableRow key={field}>
                                        <TableCell>{field}</TableCell>
                                        {vehicles.map((vehicle) => {
                                            return (
                                                <TableCell key={vehicle.name}>
                                                    {vehicle[field]}
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

export default Vehicles;
