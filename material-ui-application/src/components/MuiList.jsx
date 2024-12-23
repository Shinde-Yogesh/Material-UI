import React from 'react'
import {Box,List,ListItem,ListItemText} from '@mui/material'

export const MuiList = () => {
  return (
 <Box sx={{width: '400px', bgcolor: '#eb548e' }}>
    <List>
      <ListItem>
        <ListItemText primary="List Item 1"/>
      </ListItem>
      <ListItem>
        <ListItemText primary="List Item 2"/>
      </ListItem>
      <ListItem>
        <ListItemText primary="List Item 3"/>
      </ListItem>
    </List>
  </Box>  )
}