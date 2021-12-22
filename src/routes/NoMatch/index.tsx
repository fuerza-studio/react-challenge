import React from 'react';
import { Box, Typography } from '@mui/material';

const NoMatch: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'calc(100vh - 82px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography sx={{ fontWeight: 700, fontSize: '70px' }}>404</Typography>
      <Typography sx={{ fontSize: '20px' }}>Page Not Found</Typography>
    </Box>
  );
};

export default NoMatch;
