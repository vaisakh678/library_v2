import React from "react";
import "./listButton.css";
import { Box, Typography } from "@mui/material";

function ListButton({ label, selected, onclick, leftIcon }) {
    return (
        <Box
            padding={1}
            className={selected ? "selected list-btn" : "not-selected list-btn"}
            display="flex"
            width="200px"
            onClick={() => {
                onclick();
            }}
        >
            {leftIcon}
            <Typography marginLeft={1}>{label}</Typography>
        </Box>
    );
}

export default ListButton;
