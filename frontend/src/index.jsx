/* React packages */
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    TextField
} from 'react-router-dom';



/* Custom components */
import {
    HomePage,
    NoPage,
    ResearchPage,
    ContributePage,
    ConnectPage,
    RegistrationPage,
} from '@home/pages';



/* Theme */
import { ThemeProvider, createTheme } from '@mui/material/styles';
import themeData from '@home/theme.json';
const theme = createTheme(themeData);



/* Load Components */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/research" element={<ResearchPage/>}/>
                <Route path="/contribute" element={<ContributePage/>}/>
                <Route path="/connect" element={<ConnectPage/>}/>
                <Route path="/register" element={<RegistrationPage/>}/>
                <Route path="*" element={<NoPage/>}/>
            </Routes>
        </Router>
    </ThemeProvider>
);
