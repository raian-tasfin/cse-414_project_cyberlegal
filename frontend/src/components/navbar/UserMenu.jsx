import React from 'react';
import { Link } from 'react-router-dom';

import {
    Box,
    IconButton,
    Typography,
    Menu,
    Avatar,
    Tooltip,
    MenuItem
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';



const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const guestData = [
    { label: 'Login', href: '/login' },
    { label: 'Register', href: '/register' },
];




function GuestMenuItem ({ dataItem, closeMenu}) {
    return (
        <Link to={dataItem.href}
              underline="none"
              style={{ textDecoration: "none" }}
        >
        <MenuItem key={dataItem.label}
                  onClick={closeMenu}
        >
            <Typography sx={{
                textAlign: 'center',
                fontSize: "20px"
            }}>
                {dataItem.label}
            </Typography>
        </MenuItem>
        </Link>
    );
}



function UserMenu ({sx}) {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };



    return (
        <Box sx={sx}>
            <Tooltip title="Account">
                <IconButton
                    size="large"
                    onClick={handleOpenUserMenu}
                    color="inherit"
                >
                    <PersonIcon/>
                </IconButton>

            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {guestData.map((guestMenuItem) => (
                    <GuestMenuItem dataItem={guestMenuItem}
                                   closeMenu={handleCloseUserMenu}
                    />
                ))}
            </Menu>
        </Box>
    );
}


export default UserMenu;
