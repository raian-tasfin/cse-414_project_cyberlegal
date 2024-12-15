import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Page from './Page';

import {
    Container,
    Typography,
    TextField,
    Box,
    Button,
    Paper,
    IconButton,
    InputAdornment,
    Snackbar,
    Alert,
} from '@mui/material';

import {
    Visibility,
    VisibilityOff
} from '@mui/icons-material';

const LoginForm = () => {
    /* Form data */
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    /* Password Visibility */
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    /* Snackbar state */
    const [loginError, setLoginError] = useState(false);

    const handleCloseSnackbar = () => {
        setLoginError(false);
    };

    /* Login */
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:5000/login',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            localStorage.setItem('authToken', response.data.data.token);
            console.log(response.data.data.token);
            navigate('/');
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setLoginError(true);
            } else {
                console.error('Error during login:', error);
            }
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                mt: 3,
                padding: '50px',
            }}
        >
            <Typography variant="h4" gutterBottom>
                Login
            </Typography>
            <Container sx={{ pb: '20px' }}>
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
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleTogglePasswordVisibility}
                                    edge="end"
                                >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Container>
            <Button type="submit"
                    fullWidth variant="contained"
                    sx={{ mt: 3, mb: 2 }}
            >
                Login
            </Button>
            <Snackbar
                open={loginError}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
            >
                <Alert severity="error" onClose={handleCloseSnackbar}>
                    Invalid email or password. Please try again.
                </Alert>
            </Snackbar>
        </Box>
    );
};



function LoginPage() {
    return (
        <Page>
            <Container
                maxWidth="sm"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                }}
            >
                <Paper
                    sx={{
                        boxShadow: 3,
                        borderRadius: 2,
                        padding: 4,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'background.default',
                    }}
                >
                    <Box sx={{ maxWidth: '500px' }}>
                        <LoginForm />
                    </Box>
                </Paper>
            </Container>
        </Page>
    );
}

export default LoginPage;
