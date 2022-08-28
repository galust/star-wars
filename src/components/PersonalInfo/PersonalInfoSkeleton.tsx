import React from 'react';

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

import InnerPageSkeleton from '../../pages/InnerPage/InnerPageSkeleton';

const PersonalInfoSkeleton: React.FC = () => {
    return (
        <Box sx={{ display: ['block', 'flex'] }} my={2}>
            <Box
                width={[300, 350]}
                height={[410, 'auto']}
                sx={{ flexShrink: '0' }}
                mr={['auto', 2]}
                mb={[2, 0]}
                ml={['auto', 0]}
            >
                <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="100%"
                    sx={{ borderRadius: '12px' }}
                />
            </Box>

            <InnerPageSkeleton />
        </Box>
    );
};

export default PersonalInfoSkeleton;
