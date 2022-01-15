import { NotificationsNone } from "@mui/icons-material";
import { AppBar, Box, IconButton } from "@mui/material";
import React from "react";
import AppMenu from "./appMenu";
import CustomRating from "./customRating";

const MagenAppBar = () => {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <div>
                    <IconButton>
                        <NotificationsNone/>
                    </IconButton>
                    <CustomRating value={4}/>
                    <AppMenu/>
                </div>
            </AppBar>
        </Box>
    );
}

export default MagenAppBar;