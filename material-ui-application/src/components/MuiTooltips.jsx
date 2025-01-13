import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export const MuiTooltips = () => {
  return (
    <Tooltip title="Delete" arrow>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};
