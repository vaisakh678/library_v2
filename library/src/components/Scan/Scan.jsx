import React, { useState } from "react";
import { Box, Typography, Button, ButtonGroup } from "@mui/material";
import KeyInput from "./Inputs/KeyInput";
import QrCode from "./Inputs/QrCode";
import Scanner from "./Inputs/Scanner";

function Scan() {
    const [selected, setSelected] = useState("key");

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
                    Scan
                </Typography>
            </Box>
            <Box
                width="100%"
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    bgcolor="#d8dde9"
                    height="500px"
                    width="400px"
                    borderRadius={1}
                    overflow="hidden"
                >
                    <Box
                        bgcolor="#d8dde9"
                        width="100%"
                        height="85%"
                        aria-label="scanner"
                        padding={2}
                    >
                        {selected === "key" && <KeyInput />}
                        {selected === "qr" && <QrCode />}
                        {selected === "scanner" && <Scanner />}
                    </Box>
                    <Box
                        bgcolor="#0b1929"
                        width="100%"
                        height="15%"
                        aria-label="options"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <ButtonGroup
                            variant="contained"
                            aria-label="outlined primary button group"
                            size="small"
                            // bgcolor="white"
                        >
                            <Button
                                style={{
                                    backgroundColor: "green",
                                }}
                                color="success"
                                onClick={() => {
                                    setSelected("key");
                                }}
                            >
                                Input
                            </Button>
                            <Button
                                onClick={() => {
                                    setSelected("qr");
                                }}
                            >
                                Qr code
                            </Button>
                            <Button
                                onClick={() => {
                                    setSelected("scanner");
                                }}
                            >
                                Scanner
                            </Button>
                        </ButtonGroup>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Scan;
