import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import ListButton from "./ListButton/ListButton";

import TuneIcon from "@mui/icons-material/Tune";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import InfoIcon from "@mui/icons-material/Info";

import PrefGeneral from "./SubMenu/PrefGeneral";
import PrefProfile from "./SubMenu/PrefProfile";
import PrefVisitor from "./SubMenu/PrefVisitor";
import PrefAbout from "./SubMenu/PrefAbout";

function Preference({
    // general
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
    // profile
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
    const [selected, setSelected] = useState("general");

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
                    Preference
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
                    // bgcolor="gray"
                    width="80%"
                    height="80%"
                    aria-label="preferences-innerContainer"
                    display="flex"
                >
                    <Stack spacing={1}>
                        <ListButton
                            label="General"
                            leftIcon={<TuneIcon />}
                            selected={selected === "general"}
                            onclick={() => setSelected("general")}
                        />

                        <ListButton
                            label="Profile"
                            leftIcon={<ManageAccountsIcon />}
                            selected={selected === "profile"}
                            onclick={() => setSelected("profile")}
                        />

                        <ListButton
                            label="Visitor"
                            selected={selected === "visitor"}
                            leftIcon={<AutoStoriesIcon />}
                            onclick={() => setSelected("visitor")}
                        />

                        <ListButton
                            label="About"
                            leftIcon={<InfoIcon />}
                            selected={selected === "about"}
                            onclick={() => setSelected("about")}
                        />
                    </Stack>
                    <Box
                        // bgcolor={"gray"}
                        width="100%"
                        height="100%"
                        marginLeft={5}
                    >
                        {selected === "general" && (
                            <PrefGeneral
                                // general
                                autoStart={autoStart}
                                keepRun={keepRun}
                                qr_delay={qr_delay}
                                caching={caching}
                                dark={dark}
                                prefHash={prefHash}
                                setAutoStart={setAutoStart}
                                setKeepRun={setKeepRun}
                                setQr_delay={setQr_delay}
                                setCaching={setCaching}
                                setDark={setDark}
                                setPrefHash={setPrefHash}
                            />
                        )}
                        {selected === "profile" && (
                            <PrefProfile
                                // profile
                                fname={fname}
                                lname={lname}
                                email={email}
                                register_num={register_num}
                                profileHash={profileHash}
                                setFname={setFname}
                                setLname={setLname}
                                setRegister_num={setRegister_num}
                                setEmail={setEmail}
                                setProfileHash={setProfileHash}
                            />
                        )}
                        {selected === "visitor" && <PrefVisitor />}
                        {selected === "about" && <PrefAbout />}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Preference;
