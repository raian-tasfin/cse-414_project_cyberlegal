
import React from 'react';
import { styled } from '@mui/material/styles';
import {
    Box,
    Typography,
    Container,
    Card,
    CardContent
} from '@mui/material';



function MyCard ({ headline, children }) {
    return (
        <div style={{ padding: 30 }}>
            <Card sx={{ flexGrow: 1,
                        maxWidth: "300px",
                        borderRadius: 2,
                        textAlign: 'center'
            }}>
                <CardContent>
                    <Typography variant="h3"
                                component="div"
                                gutterBottom
                    >
                        {headline}
                    </Typography>
                    <Typography sx={{
                        mb: 1.5,
                        color:"text.secondary",
                        fontSize:"24px"
                    }}
                    >
                        {children}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}



function Slogan() {
    return (
        <Container sx={{ mb:"50px" }}>
            <Typography variant="h3" sx={{ textAlign:"center" }}>
                A community for legal solutions
            </Typography>
            <Typography>&nbsp;</Typography>
            <Typography
                variant="body1"
                sx={{
                    color: "text.secondary",
                    textAlign:"center",
                    fontSize:"30px"
                }}
            >
                Research or add cases and legal codes. Get or
                provide professional help. This platform is for
                and by the community.
            </Typography>
        </Container>
    );
}

export default Slogan;
