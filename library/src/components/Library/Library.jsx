import React, { useState } from "react";
import { Box, Typography, Tab } from "@mui/material";
import { TabList, TabContext, TabPanel } from "@mui/lab/";
import Active from "./Tabs/Active";

function Library() {
    const [tab, setTab] = useState("1");

    return (
        <Box
            width="100%"
            height="100%"
            display="flex"
            flexDirection="column"
            overflow="hidden"
            padding={1}
            aria-label="preferences-component"
        >
            <Box
                width="100%"
                height="100%"
                display="flex"
                flexDirection="column"
            >
                <Typography variant="h4" gutterBottom>
                    Library
                </Typography>
                <TabContext
                    value={tab}
                    aria-label="tab-fucking-context"
                    display="flex"
                >
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList
                            onChange={(e, newValue) => {
                                setTab(newValue);
                            }}
                            aria-label="lab API tabs example"
                        >
                            <Tab label="Active" value="1" />
                            <Tab label="Filter" value="2" />
                            <Tab label="Analyse" value="3" />
                        </TabList>
                    </Box>
                </TabContext>
                <Box width="100%" height="100%">
                    {tab === "1" && <Active />}
                </Box>
            </Box>
        </Box>
    );
}

export default Library;
