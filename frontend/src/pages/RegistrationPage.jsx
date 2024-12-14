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
    InputAdornment,
    Snackbar,
    Alert,
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
    const [
        showConfirmPassword,
        setShowConfirmPassword
    ] = useState(false);
    const [
        openErrorSnackbar,
        setOpenErrorSnackbar
    ] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleToggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            setOpenErrorSnackbar(true);
            return;
        }

        console.log('Form submitted:', formData);

        setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    const handleCloseSnackbar = () => {
        setOpenErrorSnackbar(false);
    };

    return (
        <Box component="form"
             onSubmit={handleSubmit}
             sx={{
                 mt: 3,
                 padding: "50px"
             }}
        >
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
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleTogglePasswordVisibility}
                                    edge="end">
                                            {
                                                showPassword
                                                ? <VisibilityOff />
                                                : <Visibility />
                                            }
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    error={formData.password !== formData.confirmPassword}
                    helperText={formData.password !== formData.confirmPassword && 'Passwords do not match'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleToggleConfirmPasswordVisibility} edge="end">
                                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Container>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Register
            </Button>
            <Snackbar
                open={openErrorSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
            >
                <Alert severity="error" onClose={handleCloseSnackbar}>
                    Passwords do not match!
                </Alert>
            </Snackbar>
        </Box>
    );
};

function RegistrationPage() {
    return (
        <Page>
            <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <Paper
                    sx={{
                        boxShadow: 3,
                        borderRadius: 2,
                        padding: 4,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'background.default'
                    }}
                >
                    <Box sx={{ maxWidth: '500px' }}>
                        <RegistrationForm />
                    </Box>
                </Paper>
            </Container>
        </Page>
    );
}

export default RegistrationPage;
