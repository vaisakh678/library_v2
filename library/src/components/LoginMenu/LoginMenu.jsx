import React from "react";
import ReadingImg from "../../assets/reading_.png";
import {
    Box,
    Typography,
    Button,
    TextField,
    Stack,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
import "./loginMenu.css";

function LoginMenu({
    invalid,
    username,
    passwrod,
    remember,
    setUsername,
    setPassword,
    setRemember,
    handleLogin,
}) {
    return (
        <Box
            className="login-menu"
            width="650px"
            height="420px"
            borderRadius={1}
            padding={1}
            display="flex"
        >
            <Box
                className="login_feilds"
                // borderRadius={1}
                width="45%"
                height="100%"
                marginRight={1}
                padding={3}
            >
                <Typography variant="h4" gutterBottom marginBottom={6}>
                    Login
                </Typography>
                <Stack direction={"column"} spacing={1}>
                    <TextField
                        label="Username"
                        size="small"
                        value={username}
                        onInput={(e) => setUsername(e.target.value)}
                    ></TextField>
                    <TextField
                        label="password"
                        type={"password"}
                        size="small"
                        spacing={3}
                        value={passwrod}
                        onInput={(e) => setPassword(e.target.value)}
                    ></TextField>
                    <Box>
                        <FormControlLabel
                            label="Keep me logged in"
                            control={
                                <Checkbox
                                    checked={remember}
                                    onChange={(e) =>
                                        setRemember(e.target.checked)
                                    }
                                />
                            }
                        />
                    </Box>
                    <Button variant="contained" onClick={handleLogin}>
                        Login
                    </Button>

                    {invalid && (
                        <Box display="flex" justifyContent={"center"}>
                            <Typography color={"#d32f2f"}>
                                Invalid credentials!
                            </Typography>
                        </Box>
                    )}
                </Stack>
            </Box>

            {/* right box */}
            <Box display="flex" width="55%" height="100%" borderRadius={1}>
                <img src={ReadingImg} alt="" />
            </Box>
        </Box>
    );
}

export default LoginMenu;
