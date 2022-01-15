import { NotificationsNone } from "@mui/icons-material";
import { AppBar, Box, Divider, IconButton } from "@mui/material";
import React from "react";
import AppMenu from "./appMenu";
import CustomRating from "./customRating";

const MagenAppBar = () => {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Box
                    sx={{
                    display: 'flex',
                    alignItems: 'center',
                    '& hr': {
                        mx: 0.5,
                    },
                    }}
                >
                    <IconButton>
                        <NotificationsNone/>
                    </IconButton>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <CustomRating value={1}/>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <AppMenu/>
                </Box>
            </AppBar>
        </Box>
    );
}

export default MagenAppBar;