import * as React from 'react';

import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Button,
    Tooltip,
    MenuItem
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import Logo from '@home/components/Logo';
import UserMenu from '@home/components/UserMenu';



const pages = ['Research', 'Contribute', 'Connect'];



function Navbar() {
    const theme = useTheme();
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="static"
            color={theme.prmary}
            style={{ position: 'fixed', top: 0 , left : 0,  margin: 0}}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    {/* Full Screen Logo */}
                    <Box sx={{ flexGrow: 0.01 }} />
                    <Logo />
                    <Box sx={{ flexGrow: 0.01 }} />


                    {/* Small Screen Menu Icon */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
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
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Small Screen Logo */}
                    <Logo
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                        }}
                    />

                    {/* Full Screen Nav Options */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>


                    {/* Account */}
                    <UserMenu sx={{ flexGrow: 0 }} />
                </Toolbar>
            </Container>
        </AppBar>
    );
}


export default Navbar;
