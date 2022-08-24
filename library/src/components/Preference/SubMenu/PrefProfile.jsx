import React, { useState, useEffect } from "react";
import { Typography, Box, Stack, TextField, Button } from "@mui/material";

function PrefProfile({
    fname,
    lname,
    email,
    register_num,
    profileHash,
    setFname,
    setLname,
    setRegister_num,
    setEmail,
    setProfileHash,
}) {
    const [accumulator, setAccumulator] = useState(false);
    const [changes_switch, setChanges_switch] = useState(false);

    console.log(changes_switch);

    useEffect(() => {
        if (
            profileHash._firstname !== fname ||
            profileHash._lastname !== lname ||
            profileHash._email !== email ||
            profileHash._register_number !== register_num
        ) {
            if (accumulator) {
                setChanges_switch(true);
            }
        } else {
            setAccumulator(true);
            setChanges_switch(false);
        }
    }, [
        fname,
        lname,
        email,
        register_num,
        accumulator,
        profileHash._firstname,
        profileHash._lastname,
        profileHash._email,
        profileHash._register_number,
    ]);

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Profile
            </Typography>
            <Stack spacing={1.5}>
                <Stack direction="row">
                    <Stack width="200px" marginRight={1}>
                        <TextField
                            label="First name"
                            variant="standard"
                            value={fname}
                            onChange={(e) => {
                                setFname(e.target.value);
                            }}
                        />
                    </Stack>
                    <Stack width="200px">
                        <TextField
                            label="First name"
                            variant="standard"
                            value={lname}
                            onChange={(e) => {
                                setLname(e.target.value);
                            }}
                        />
                    </Stack>
                </Stack>
                <Stack width="200px" spacing={1.5}>
                    <TextField
                        label="Register number"
                        variant="standard"
                        disabled
                        value={register_num}
                        onChange={(e) => {
                            setRegister_num(e.target.value);
                        }}
                    />
                    <TextField
                        label="Email"
                        variant="standard"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </Stack>
                <Stack spacing={1.5}>
                    <Stack direction="row">
                        <Button variant="contained">Save changes</Button>
                    </Stack>
                    <Stack direction="row">
                        <Button variant="contained">Change password</Button>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
}

export default PrefProfile;
