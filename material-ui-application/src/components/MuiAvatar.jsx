import React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { AvatarGroup } from "@mui/material";

export default function MuiAvatar() {
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={1}>
        <Avatar sx={{ p: 2, bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ p: 2, bgcolor: "success.light" }}>CK</Avatar>
      </Stack>

      <Stack direction={"row"} spacing={1}>
        <AvatarGroup>
          <Avatar sx={{bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{bgcolor: "success.light" }}>CK</Avatar>
          <Avatar
            src="https://queenstudios.shop/cdn/shop/files/3.QueenStudiosBruceWayne_620x.png?v=1727835010"
            alt="Bruce Wayne"
          />
          <Avatar
            src="https://i.redd.it/i-wonder-why-most-clark-kent-portrayals-dont-have-him-v0-53ddsl388adb1.jpg?width=1429&format=pjpg&auto=webp&s=6dca5bc57664f3456ad4bdd186b39f84b1ab6664"
            alt="Clark Kent"
          />
        </AvatarGroup>
      </Stack>
    </Stack>
  );
}
