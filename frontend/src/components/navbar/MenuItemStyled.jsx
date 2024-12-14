import React from 'react';


function MenuItemStyled ({ dataItem, closeMenu, onSelect }) {
    const handleClick = () => {
        closeMenu();
        if (onSelect) {
            onSelect(dataItem);
        }
    };

    return (
        <Link to={dataItem.href}
              underline="none"
              style={{ textDecoration: "none" }}
        >
        <MenuItem key={dataItem.label}
                  onClick={closeMenu}
        >
            <Typography sx={{
                textAlign: 'center',
                fontSize: "18px"
            }}>
                {dataItem.label}
            </Typography>
        </MenuItem>
        </Link>
    );
}


export default MenuItemStyled;
