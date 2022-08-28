import React from 'react';

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const InnerPageSkeleton: React.FC = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <Box className="inner-page-skeleton" sx={{ borderRadius: '12px' }} width="100%" p={2}>
            <Box
                sx={{
                    borderBottom: '1px solid rgb(230, 234, 242)',
                }}
                pb={2}
                mb={2}
            >
                <Skeleton
                    variant="rectangular"
                    width="200px"
                    height={20}
                    sx={{ borderRadius: '12px' }}
                />
            </Box>

            {items.map((index) => {
                return (
                    <Box key={index} sx={{ marginBottom: '2px' }}>
                        <Skeleton
                            variant="rectangular"
                            width="100%"
                            height={48}
                            sx={{ borderRadius: '12px' }}
                        />
                    </Box>
                );
            })}
        </Box>
    );
};

export default InnerPageSkeleton;
