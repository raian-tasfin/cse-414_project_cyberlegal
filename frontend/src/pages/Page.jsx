import React from 'react';
import {
    Container,
} from '@mui/material';
import { Navbar } from '@home/components';

function Page(props) {
    return (
        <Container>
            <Navbar />
            <Container>&nbsp;</Container>
            <Container>&nbsp;</Container>
            <Container
                variant="div"
                sx={{
                    mt: 6,
                    mb: 4,
                }}
            >
                {props.children}
            </Container>
        </Container>
    );
}

export default Page;
