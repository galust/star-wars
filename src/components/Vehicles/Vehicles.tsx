import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';

import { useAppSelector } from '../../redux/hooks';
import { vehiclesSel } from '../../redux/vehicles';

import { VehicleFields } from '../../pages/InnerPage/fields';

import InnerPageSkeleton from '../../pages/InnerPage/InnerPageSkeleton';

import './../../pages/InnerPage/InnerPage.scss';

const Vehicles: React.FC = () => {
    const vehicles = useAppSelector(vehiclesSel.selectVehicles);
    const isLoading = useAppSelector(vehiclesSel.selectLoading);

    if (isLoading) {
        return (
            <Box my={2}>
                <InnerPageSkeleton />
            </Box>
        );
    } else if (!vehicles || !vehicles.length) {
        return null;
    }

    return (
        <Box className="card-info" sx={{ borderRadius: '12px' }} p={2} my={2}>
            <Typography className="card-info-title card-header-border">Vehicles</Typography>
            <TableContainer>
                <Table className="card-info-list">
                    <TableBody>
                        {VehicleFields.map((field) => {
                            return (
                                <TableRow key={field}>
                                    <TableCell>
                                        <Box component="span" className="text-capitalize">
                                            {field.replaceAll('_', ' ')}
                                        </Box>
                                    </TableCell>
                                    {vehicles.map((vehicle) => {
                                        return (
                                            <TableCell key={vehicle.name}>
                                                <Box key={vehicle.name}>{vehicle[field]}</Box>
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

export default Vehicles;
