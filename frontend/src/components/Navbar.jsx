import React from 'react';
import { Link } from 'react-router-dom';

import {
    AppBar,
    Box,
    Toolbar,
    Container,
} from '@mui/material';


import { useTheme } from '@mui/material/styles';
import {
    Logo,
    UserMenu,
    WideNavMenu,
    ShortNavMenu
} from './navbar';



const pageData = [
    { label: 'Research', href: '/research' },
    { label: 'Contribute', href: '/contribute' },
    { label: 'Connect', href: '/connect' },
];



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
            style={{
                position: 'fixed',
                top: 0 ,
                left : 0,
                margin: 0,
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    {/* Full Screen Logo */}
                    <Box sx={{ flexGrow: 0.01 }} />
                    <Logo />
                    <Box sx={{ flexGrow: 0.01 }} />


                    {/* Small Screen Menu Icon */}
                    <ShortNavMenu pageData={pageData} />
                    {/* Small Screen Logo */}
                    <Logo sx={{ display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                    }}/>

                    {/* Full Screen Nav Options */}
                    <WideNavMenu pageData={pageData} />

                    {/* Account */}
                    <UserMenu sx={{ flexGrow: 0 }} />
                </Toolbar>
            </Container>
        </AppBar>
    );
}


export default Navbar;
