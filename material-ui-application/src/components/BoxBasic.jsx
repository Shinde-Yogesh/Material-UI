import * as React from 'react';
import Box from '@mui/material/Box';

/**
 * Basic usage of the Box component.
 *
 * This demo shows how to create a Box that renders as an HTML section element.
 * The section element is given a dashed grey border, and some padding.
 */

export default function BoxBasic() {
  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      This Box renders as an HTML section element.
    </Box>
  );
}
