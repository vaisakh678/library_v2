import React from "react";
import { Box, Button, Stack, TextField } from "@mui/material";

function KeyInput() {
    return (
        <Box
            border={1}
            borderColor="gray"
            width="100%"
            height="100%"
            borderRadius={1}
            padding={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <form action="">
                <Stack direction="column" spacing={1} width="200px">
                    <TextField size="small" label="Register number" />
                    <Button variant="contained" size="small">
                        Submit
                    </Button>
                </Stack>
            </form>
        </Box>
    );
}

export default KeyInput;
