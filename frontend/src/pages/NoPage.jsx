import React from 'react';
import Page from '@home/pages/Page';
import {
    Container,
    Typography
} from '@mui/material';


function NoPage () {
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
                    404
                </Typography>
                <Typography variant="h2">
                    Page Not Found
                </Typography>
            </Container>
        </Page>
    );
}



export default NoPage;
