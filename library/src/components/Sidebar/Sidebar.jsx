import { Box, Stack, SvgIcon } from "@mui/material";
import "./sidebar.css";
import CustomBtn from "./CustomBtn";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import GroupIcon from "@mui/icons-material/Group";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

function Sidebar({ selected, setSelected }) {
    return (
        <Box
            bgcolor="#fdfdfd"
            border={2}
            borderColor="#ecf0f6"
            width={250}
            height="100%"
            padding={2}
            display="flex"
            flexDirection="column"
        >
            <Box
                bgcolor="#ecf0f6"
                width="100%"
                flexGrow={1}
                marginBottom={2}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                {/* <AccountCircleIcon /> */}
                <SvgIcon component={AccountCircleIcon} fontSize="large" />
                <div>Lakshmi</div>
            </Box>
            <Box
                flexGrow={2}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
            >
                <Stack spacing={1}>
                    <CustomBtn
                        selected={"lib" === selected}
                        onclick={() => setSelected("lib")}
                        icon={<LocalLibraryIcon />}
                        label="Library"
                    />
                    <CustomBtn
                        selected={"visitor" === selected}
                        onclick={() => setSelected("visitor")}
                        icon={<GroupIcon />}
                        label="Visitor"
                    />
                    <CustomBtn
                        selected={"scan" === selected}
                        onclick={() => setSelected("scan")}
                        icon={<QrCodeScannerIcon />}
                        label="Scan"
                    />
                    <CustomBtn
                        selected={"pref" === selected}
                        onclick={() => setSelected("pref")}
                        icon={<SettingsIcon />}
                        label="Preference"
                    />
                </Stack>
                <Stack>
                    <CustomBtn icon={<LogoutIcon />} label="Logout" />
                </Stack>
            </Box>
        </Box>
    );
}

export default Sidebar;
