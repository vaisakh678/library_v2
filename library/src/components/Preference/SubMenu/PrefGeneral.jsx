import React, { useState, useEffect } from "react";
import {
    Typography,
    FormControlLabel,
    Checkbox,
    Switch,
    Box,
    Stack,
    TextField,
    Button,
} from "@mui/material";
import "./style.css";

function PrefGeneral({
    autoStart,
    keepRun,
    qr_delay,
    caching,
    dark,
    prefHash,
    setAutoStart,
    setKeepRun,
    setQr_delay,
    setCaching,
    setDark,
    setPrefHash,
}) {
    const [accumulator, setAccumulator] = useState(false);
    const [changes_switch, setChanges_switch] = useState(false);

    console.log(changes_switch);

    useEffect(() => {
        if (
            prefHash._autoStart !== autoStart ||
            prefHash._keepRun !== keepRun ||
            prefHash._qr_delay !== qr_delay ||
            prefHash._caching !== caching ||
            prefHash._dark !== dark
        ) {
            if (accumulator) {
                setChanges_switch(true);
            }
        } else {
            setAccumulator(true);
            setChanges_switch(false);
        }
    }, [
        autoStart,
        keepRun,
        qr_delay,
        caching,
        dark,
        accumulator,
        prefHash._autoStart,
        prefHash._caching,
        prefHash._dark,
        prefHash._keepRun,
        prefHash._qr_delay,
    ]);

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                General
            </Typography>
            <Stack spacing={1.5}>
                <Stack>
                    <FormControlLabel
                        label="Auto-start application"
                        control={
                            <Checkbox
                                checked={autoStart}
                                onChange={(e) => setAutoStart(e.target.checked)}
                            />
                        }
                    />

                    <FormControlLabel
                        label="On close, keep the application running"
                        control={
                            <Checkbox
                                checked={keepRun}
                                onChange={(e) => setKeepRun(e.target.checked)}
                            />
                        }
                    />
                </Stack>

                <Stack direction="row">
                    <TextField
                        label="Qr delay"
                        size="small"
                        type="number"
                        helperText="This delay if for scanning the qr code"
                        value={qr_delay}
                        onInput={(e) => {
                            setQr_delay(e.target.value);
                        }}
                    />
                </Stack>

                <FormControlLabel
                    label="Smart caching"
                    control={
                        <Switch
                            checked={caching}
                            onChange={(e) => setCaching(e.target.checked)}
                        />
                    }
                />

                <FormControlLabel
                    label="Dark Mode"
                    control={
                        <Switch
                            checked={dark}
                            onChange={(e) => setDark(e.target.checked)}
                        />
                    }
                />

                <div
                    className={
                        changes_switch ? "changes-btn" : "changes-btn hide-btn"
                    }
                >
                    <Stack direction="row" overflow="hidden">
                        <Button variant="contained">Save changes</Button>
                    </Stack>
                </div>
            </Stack>
        </Box>
    );
}

export default PrefGeneral;
