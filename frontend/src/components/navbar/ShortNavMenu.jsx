import React from 'react';
import { Link } from 'react-router-dom';

import {
    Box,
    IconButton,
    MenuItem,
    Typography,
    Menu
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

function PageMenuItem({ pageObj }) {
    return (
        <Link to={pageObj.href}
              underline="none"
              style={{ textDecoration: 'none' }}
        >
            <MenuItem key={pageObj.label}>
                <Typography sx={{
                    textAlign: 'center',
                    fontSize: "20px"
                }}>
                    {pageObj.label}
                </Typography>
            </MenuItem>
        </Link>
    );
}



function ShortNavMenu ( {pageData}) {
    const [ anchorElNav, setAnchorElNav ] = React.useState(null);
    const handleCloseMenu = () => {
        setAnchorElNav(null);
    };
    const handleOpenMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };



    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
            <IconButton
                size="large"
                onClick={handleOpenMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseMenu}
                  sx={{ display: {xs: 'block', md: 'none'} }}
            >
                { pageData.map((page) => (
                    <PageMenuItem pageObj={page} />
                )) }
            </Menu>
        </Box>
    );
}


export default ShortNavMenu;
