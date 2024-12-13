/* React packages */
import React from 'react';
import ReactDOM from 'react-dom/client';



/* Custom components */
import Navbar from '@home/components/Navbar';



/* Theme */
import { ThemeProvider, createTheme } from '@mui/material/styles';
import themeData from '@home/theme.json';
const theme = createTheme(themeData);



/* Load Components */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <Navbar />
    </ThemeProvider>
);
