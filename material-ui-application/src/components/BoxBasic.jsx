import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { Stack } from '@mui/material';

/**
 * Basic usage of the Box component.
 *
 * This demo shows how to create a Box that renders as an HTML section element.
 * The section element is given a dashed grey border, and some padding.
 */

export default function BoxBasic() {
  return (
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
  );
}
