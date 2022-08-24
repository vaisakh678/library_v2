import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import { Box, Button } from "@mui/material";
import WatchDogs from "../../../assets/watch-dogs.svg";
import "./input-style.css";

function QrCode() {
    const [data, setData] = useState("No result");
    const [qr, setQr] = useState(false);

    return (
        <Box
            border={1}
            borderColor="gray"
            width="100%"
            height="100%"
            borderRadius={1}
            padding={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Box width="300px" height="300px" bgcolor="gray">
                {qr && (
                    <QrReader
                        reactivate={true}
                        reactivateTimeout={2900}
                        scanDelay={500}
                        onResult={(result, error) => {
                            if (!!result) {
                                setData(result?.text);
                                // handle_qr(result?.text);
                                console.log(data);
                                console.log("fuckkkkk....");
                            }

                            if (!!error) {
                                console.info(error);
                            }
                        }}
                        style={{ width: "100%" }}
                    />
                )}
                <Button
                    onClick={() => {
                        setQr(true);
                    }}
                >
                    enable
                </Button>

                <Button
                    onClick={() => {
                        setQr(false);
                    }}
                >
                    disenable
                </Button>
            </Box>
            {data}
        </Box>
    );
}

export default QrCode;
