import React from 'react';
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import {
    Box,
    Typography,
    Container,
    Card,
    CardContent,
    Link,
    ButtonBase
} from '@mui/material';


function MyCard({ headline, children, to }) {
    const navigate = useNavigate();

    return (
        <div style={{ padding: 30 }}>
            <ButtonBase
                onClick={() => navigate(to)}
                sx={{
                    display: 'block',
                    textAlign: 'inherit',
                    width: '100%',
                }}
            >
                <Card
                    sx={{
                        flexGrow: 1,
                        maxWidth: "300px",
                        borderRadius: 2,
                        textAlign: 'center',
                    }}
                >
                    <CardContent>
                        <Typography
                            variant="h3"
                            component="div"
                            gutterBottom
                        >
                            {headline}
                        </Typography>
                        <Typography
                            sx={{
                                mb: 1.5,
                                color: "text.secondary",
                                fontSize: "24px",
                            }}
                        >
                            {children}
                        </Typography>
                    </CardContent>
                </Card>
            </ButtonBase>
        </div>
    );
}


function Cards () {
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4,
            margin: 4
        }}>
            <MyCard headline="Research" to="/research">
                Explore our library of cases, legal codes
                and legal glossary. Save your progress as
                you go.
            </MyCard>
            <MyCard headline="Contribute" to="/contribute">
                Improve the community by adding new cases, new
                legal codes or reviewing our existing repository.
            </MyCard>
            <MyCard headline="Connect" to="/connect">
                Do you need professional help? Connect with
                lawyers. You can provide help as an advocate as
                well!
            </MyCard>
        </Box>
    );
}

export default Cards;
