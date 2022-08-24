import React from "react";
import { Box, Typography } from "@mui/material";

function Visitor() {
    return (
        <Box
            width="100%"
            height="100%"
            display="flex"
            flexDirection="column"
            padding={1}
            aria-label="preferences-component"
        >
            <Box width="100%" borderBottom={2} borderColor="#ecf0f6">
                <Typography variant="h4" gutterBottom>
                    Visitor
                </Typography>
            </Box>
        </Box>
    );
}

export default Visitor;
