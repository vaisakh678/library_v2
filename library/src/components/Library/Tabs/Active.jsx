import React, { useState } from "react";
import {
    Box,
    TextField,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Stack,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
} from "@mui/material";

function Active() {
    const [type, setType] = useState("All");
    const arr = [1, 2, 3, 4, 5, 6, 44, 7, 3, 3, 3];

    return (
        <Box
            width="100%"
            height="100%"
            padding={1}
            display="flex"
            flexDirection="column"
        >
            <Stack direction="row">
                <Box>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small">Type</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={type}
                            label="Age"
                            onChange={(e) => setType(e.target.value)}
                        >
                            <MenuItem value={"All"}>All</MenuItem>
                            <MenuItem value={"Students"}>Students</MenuItem>
                            <MenuItem value={"Staff"}>Staff</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box padding={1}>
                    <TextField label="search" size="small" />
                </Box>
            </Stack>
            {/* <Box width="100%" height="100%" overflow="scroll" bgcolor="green"> */}
            <TableContainer component={Paper} sx={{ maxHeight: "530px" }}>
                <Table aria-label="fucking table" stickyHeader>
                    <TableHead>
                        <TableRow bgcolor="rgb(241, 241, 241)">
                            <TableCell>Serial</TableCell>
                            <TableCell>Register no.</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Checkin</TableCell>
                            <TableCell>Time elapsed</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {arr.map((e, idx) => {
                            return (
                                <TableRow>
                                    <TableCell>{idx}</TableCell>
                                    <TableCell>Kh.sc.p2mca21032</TableCell>
                                    <TableCell>Type</TableCell>
                                    <TableCell>1.20pm</TableCell>
                                    <TableCell>no fucking time</TableCell>
                                    <TableCell>active</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
        // </Box>
    );
}

export default Active;
