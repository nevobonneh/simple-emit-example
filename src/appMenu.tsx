import React, { useState } from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import { IconButton, Menu, MenuItem } from '@mui/material';

const AppMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
        <>
            <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            >
            <AppsIcon />
            </IconButton>
            <Menu
            id="long-menu"
            MenuListProps={{
                'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
                style: {
                width: '20ch',
                },
            }}
            >
                <MenuItem>
                    <AppsIcon /> Profile
                </MenuItem>
            </Menu>
        </>
    );
}

export default AppMenu;