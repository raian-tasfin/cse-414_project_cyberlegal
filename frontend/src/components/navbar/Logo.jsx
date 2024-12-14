import React from 'react';
import { Typography } from '@mui/material';



function Logo({ sx: customSx }) {
    return (
        <Typography
            variant="h5"
            component="a"
            href="/"
            sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
                ...customSx, // Apply custom styles here
            }}
        >
            CyberLegal
        </Typography>
    );
}


export default Logo;
