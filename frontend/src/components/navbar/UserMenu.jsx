import React from 'react';
import {
    Link,
    useNavigate
} from 'react-router-dom';

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

import MenuItemStyled from './MenuItemStyled';


function UserMenu({sx}) {
    const userData = [
        { label: 'Account', href: '/account'},
        { label: 'Logout', href: '/logout'}
    ];
    const guestData = [
        { label: 'Login', href: '/login' },
        { label: 'Register', href: '/register' },
    ];

    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const isLoggedIn = localStorage.getItem('authToken') !== null;

    const navigate = useNavigate();

    const handleOpenMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseMenu = (selectedLabel) => {
        setAnchorElUser(null);
        console.log('selected:', selectedLabel);
        if(selectedLabel === 'Logout') {
            localStorage.removeItem('authToken');
        }
    };
    const menuData = isLoggedIn ? userData : guestData;



    return (
        <Box sx={sx}>
            <Tooltip title="Account">
                <IconButton
                    size="large"
                    onClick={handleOpenMenu}
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
                onClose={handleCloseMenu}
            >
                {menuData.map((menuItem) => (
                    <MenuItemStyled key={menuItem.label}
                                    itemData={menuItem}
                                    closeMenu={handleCloseMenu}
                    />
                ))}
            </Menu>
        </Box>
    );
}


export default UserMenu;
