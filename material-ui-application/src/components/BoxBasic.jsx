import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

/**
 * Basic usage of the Box component.
 *
 * This demo shows how to create a Box that renders as an HTML section element.
 * The section element is given a dashed grey border, and some padding.
 */

export default function BoxBasic() {
  return (
    <>
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      This Box renders as an HTML section element.
    </Box>
    <br></br>

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
    </>
  );
}
