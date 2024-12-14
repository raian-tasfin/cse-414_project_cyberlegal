/* React packages */
import React, { useState } from 'react';
import Page from './Page';



import {
    Container,
    Typography,
    TextField,
    Box,
    Button,
    Paper,
    IconButton,
    InputAdornment
} from '@mui/material';


import {
    Visibility,
    VisibilityOff
} from '@mui/icons-material';



const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    const [
        showConfirmPassword,
        setShowConfirmPassword
    ] = useState(false);
    const handleToggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', formData);

        setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Typography variant="h4" gutterBottom>
                Registration
            </Typography>
            <Container sx={{ pb: "20px" }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment:
                    (
                        <InputAdornment position="end">
                        <IconButton
                            onClick={handleTogglePasswordVisibility}
                            edge="end"
                        >
                                    {showPassword?
                                     <VisibilityOff/> : <Visibility/>}
                        </IconButton>
                        </InputAdornment>
                    )
                    }}
                />

<TextField
                    margin="normal"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type={showConfirmPassword? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment:
                    (
                        <InputAdornment position="end">
                        <IconButton
                            onClick={
                            handleToggleConfirmPasswordVisibility
                            }
                            edge="end"
                        >
                                    {showConfirmPassword?
                                     <VisibilityOff/> : <Visibility/>}
                        </IconButton>
                        </InputAdornment>
                    )
                    }}
                />

            </Container>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Register
            </Button>
        </Box>
    );
};



function RegistrationPage () {
    return (
        <Page>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
            }}>
                <Paper
                    sx={{
                        minHeight: 'content',
                        maxWidth: "500px",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'background.default',
                        padding: "50px",
                        pt: 10,
                        pb: 50
                    }}
                >
                    <RegistrationForm />
                </Paper>
            </Container>
        </Page>
    );
}


export default RegistrationPage;
