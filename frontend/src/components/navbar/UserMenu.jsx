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

import {
    useAuth
} from '@home/hooks';

const logout = () => {
    localStorage.removeItem('authToken');
};


const userData = [
    { label: 'Account', href: '/account'},
    { label: 'Logout', href: '/logout'}
];
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
                fontSize: "18px"
            }}>
                {dataItem.label}
            </Typography>
        </MenuItem>
        </Link>
    );
}



function UserMenu () {
    const isAuthenticated = useAuth();
    return (
            isAuthenticated
            ? <></>
            : <GuestMenu/>
    );
}




function GuestMenu ({sx}) {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenGuestMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseGuestMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <Box sx={sx}>
            <Tooltip title="Account">
                <IconButton
                    size="large"
                    onClick={handleOpenGuestMenu}
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
                onClose={handleCloseGuestMenu}
            >
                {guestData.map((guestMenuItem) => (
                    <GuestMenuItem dataItem={guestMenuItem}
                                   closeMenu={handleCloseGuestMenu}
                    />
                ))}
            </Menu>
        </Box>
    );
}


export default UserMenu;
