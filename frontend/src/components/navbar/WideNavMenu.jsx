import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Box
} from '@mui/material';


function PageButton({ pageObj }) {
    return (
        <Link to={pageObj.href} underline="none">
            <Button key={pageObj.label}
                    variant="text"
                    sx={{
                        my: 2,
                        color: 'white',
                        display: 'block',
                        fontSize: "15px"
                    }}
            >
                {pageObj.label}
            </Button>
        </Link>
    );
}



function FullScreenNavOptions({ pageData }) {
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            <div>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
            </div>
            {pageData.map((page)=>(<PageButton pageObj={page} />))}
        </Box>
    );
}



export default FullScreenNavOptions;
