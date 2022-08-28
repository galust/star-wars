import React from 'react';

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';

const CardSkeleton: React.FC = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <Box className="characters-skeleton">
            <Grid container spacing={2}>
                {items.map((index) => {
                    return (
                        <Grid item key={index} xs={12} sm={6} md={3} lg={2.4}>
                            <Skeleton
                                variant="rectangular"
                                width="100%"
                                height={148}
                                sx={{ borderRadius: '12px' }}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default CardSkeleton;
