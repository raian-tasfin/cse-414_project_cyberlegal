import React from 'react';
import { Link } from 'react-router-dom'
import {
    MenuItem,
    Typography
} from '@mui/material';


function MenuItemStyled ({ itemData, closeMenu, selectedLabel}) {
    const { label, href} = itemData;
    const handleClick = () => {
        closeMenu(label);
    };

    return (
        <Link to={href}
              underline="none"
              style={{ textDecoration: "none" }}
        >
            <MenuItem key={label}
                      onClick={handleClick}
            >
                <Typography sx={{
                    textAlign: 'center',
                    fontSize: "18px"
                }}>
                    {label}
                </Typography>
            </MenuItem>
        </Link>
    );
}


export default MenuItemStyled;
