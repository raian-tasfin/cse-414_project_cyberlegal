/* React packages */
import React from 'react';
import Page from './Page';

import {
    Container,
    Typography
} from '@mui/material';


function ContributePage () {
    return (
        <Page>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh'
            }}>
                <Typography variant="h1">
                   Contribute Page
                </Typography>
                <Typography variant="h2">
                    Under Construction
                </Typography>
            </Container>
        </Page>
    );
}



export default ContributePage;
