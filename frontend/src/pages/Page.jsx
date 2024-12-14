/* React packages */
import React from 'react';

/* Material components */
import { CssBaseline } from '@mui/material';

/* Custom components */
import Navbar from '@home/components/Navbar';



function Page (props) {
    return (
        <>
        <Navbar />
        { props.children }
        </>
    );
}



export default Page;
