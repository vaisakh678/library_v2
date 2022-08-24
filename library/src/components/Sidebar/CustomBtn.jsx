import React from "react";
import { Typography } from "@mui/material";

function CustomBtn({ icon, label, selected, onclick }) {
    return (
        <div
            className={selected ? "btn selected-btn" : "btn hover-btn"}
            onClick={() => {
                onclick();
            }}
        >
            <div className="btn-icon">{icon}</div>
            <Typography>{label}</Typography>
        </div>
    );
}

export default CustomBtn;
