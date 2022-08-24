import React, { useState, useEffect } from "react";
import "./login.css";
import LoginMenu from "../../components/LoginMenu/LoginMenu";
import { Box } from "@mui/material";

function Login() {
    const [invalid, setInvalid] = useState(false);
    const [username, setUsername] = useState("");
    const [passwrod, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    async function handleLogin() {
        let response = await fetch("http://localhost:3001/api/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                passwrod,
                remember,
            }),
        });

        const status = await response.status;
        if (status === 404) window.location.href = "/404";
        else if (status !== 200) window.location.href = "/fucked_up";

        let data = await response.json();
        console.log(data);

        if (data.user) {
            localStorage.setItem("token", data.user);
            window.location.href = "/dashboard";
        } else {
            localStorage.removeItem("token");
            setInvalid(true);
        }
    }

    // checking the token is set or not, if it is set redirect to dashboard page
    useEffect(() => {
        if (localStorage.getItem("token")) window.location.href = "/dashboard";
    }, []);

    return (
        <Box
            className="login-page"
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems={"center"}
        >
            <LoginMenu
                invalid={invalid}
                username={username}
                passwrod={passwrod}
                remember={remember}
                setUsername={setUsername}
                setPassword={setPassword}
                setRemember={setRemember}
                handleLogin={handleLogin}
            />
        </Box>
    );
}

export default Login;
