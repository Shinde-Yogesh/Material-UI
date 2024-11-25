import { Drawer, Box, IconButton,  Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export const MuiDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    return (
        <>
        <IconButton size="large" 
        edge="start" 
        color="inherit"
        aria-label="logo" 
        onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon />
        </IconButton>
        <Drawer 
        anchor="left" 
        open={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)}>
            <Box p={2} sx={{ width: 250 }} textAlign={"center"} role="presentation">
              <Typography variant="h6" component="div">
                Side drawer
                </Typography>
            </Box>
        </Drawer>
        </>
    )
}         