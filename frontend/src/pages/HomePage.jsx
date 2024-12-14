/* React packages */
import React from 'react';
import Page from './Page';

import {
    Container,
    Typography
} from '@mui/material';

import {
    Slogan,
    Cards
} from '@home/components/home-page';


function HomePage () {
    return (
        <Page>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh'
            }}>
                <Slogan />
                <Cards />
            </Container>
        </Page>
    );
}



export default HomePage;
