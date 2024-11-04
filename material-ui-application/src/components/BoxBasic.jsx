import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { Paper, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';

/**
 * Basic usage of the Box component.
 *
 * This demo shows how to create a Box that renders as an HTML section element.
 * The section element is given a dashed grey border, and some padding.
 */

export default function BoxBasic() {
  return (
    <Paper sx={{ padding: '32px' }} elevation={3}>
    <Stack
    sx={{border: '1px solid', padding: 2}}
    direction={'row'}
    spacing={2}>
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      This Box renders as an HTML section element.
    </Box>
    

    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: 'purple',
          },
        },
      }}
    >
      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          border: '1px solid',    
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      />
    </ThemeProvider>
    </Stack>
    {/* auto for the component size  */}
   <Grid container my={2}   spacing={2}>
        <Grid item xs={3}><Box bgcolor={'primary.light'}>Item 1</Box></Grid>
        <Grid item xs='auto'><Box bgcolor={'primary.light'}>Item 2</Box></Grid>
        <Grid item xs={3}><Box bgcolor={'primary.light'}>Item 3</Box></Grid>
        <Grid item xs={3}><Box bgcolor={'primary.light'}>Item 4</Box></Grid>
   </Grid>
    </ Paper >
  );
}
