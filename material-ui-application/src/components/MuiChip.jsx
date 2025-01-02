import { Stack,Chip } from '@mui/material'
export const MuiChip = () => {
  return (
    <Stack spacing={1} direction={"row"}>
      <Chip label="Chip" color="primary" variant="outlined" />
    </Stack>
  )
}
