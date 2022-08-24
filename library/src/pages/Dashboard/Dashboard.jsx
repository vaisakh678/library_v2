import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Box } from "@mui/material";

import Library from "../../components/Library/Library";
import Visitor from "../../components/Visitor/Visitor";
import Scan from "../../components/Scan/Scan";
import Preference from "../../components/Preference/Preference";

function Dashboard() {
    const [selected, setSelected] = useState("lib");

    // userdatas___________
    // general
    const [autoStart, setAutoStart] = useState(false);
    const [keepRun, setKeepRun] = useState(false);
    const [qr_delay, setQr_delay] = useState(0);
    const [caching, setCaching] = useState(false);
    const [dark, setDark] = useState(false);
    const [prefHash, setPrefHash] = useState({});

    // profile
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [register_num, setRegister_num] = useState("");
    const [profileHash, setProfileHash] = useState({});

    useEffect(() => {
        return () => {
            user_data_fetch();
        };
    }, []);

    const user_data_fetch = async () => {
        let response = await fetch("http://localhost:3001/api/user_data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": localStorage.getItem("token"),
            },
        });

        const status = await response.status;
        if (status === 404) window.location.href = "/404";
        else if (status !== 200) window.location.href = "/fucked_up";
        let data = await response.json();
        console.log(data);

        // general
        const _autoStart = data.data.auto_start;
        const _keepRun = data.data.keep_running;
        const _qr_delay = String(data.data.qr_delay);
        const _caching = data.data.smart_catching;
        const _dark = data.data.darkTheme;

        setAutoStart(_autoStart);
        setKeepRun(_keepRun);
        setQr_delay(_qr_delay);
        setCaching(_caching);
        setDark(_dark);
        setPrefHash({ _autoStart, _keepRun, _qr_delay, _caching, _dark });

        // profile
        const _firstname = data.data.name;
        const _lastname = data.data.lastname;
        const _register_number = data.data.register_number;
        const _email = data.data.email;

        setFname(_firstname);
        setLname(_lastname);
        setRegister_num(_register_number);
        setEmail(_email);
        setProfileHash({
            _firstname,
            _lastname,
            _register_number,
            _email,
        });
    };

    return (
        <>
            <Box bgcolor={"white"} display="flex" width="100%" height="100%">
                <Sidebar selected={selected} setSelected={setSelected} />
                <Box padding={1} width="100%" height="100%">
                    {selected === "lib" && <Library />}
                    {selected === "visitor" && <Visitor />}
                    {selected === "scan" && <Scan />}
                    {selected === "pref" && (
                        <Preference
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
                </Box>
            </Box>
        </>
    );
}

export default Dashboard;
