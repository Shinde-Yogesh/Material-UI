import React from "react";
import { Box, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar,Avatar } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
export const MuiList = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "#575959" }}>
      <List>
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
                <Avatar>
                <MailIcon />
                </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List Item 1" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="List Item 2" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="List Item 3" />
        </ListItem>
      </List>
    </Box>
  );
};
