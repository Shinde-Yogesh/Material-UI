import React from 'react'
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

export default function MuiAvatar() {
  return (
    <Stack spacing={4} direction={"row"} sx={{ p: 2, bgcolor: 'background.paper' }}>
        <Avatar>BW</Avatar>
        <Avatar>CK</Avatar>
        </Stack>
  )
}
