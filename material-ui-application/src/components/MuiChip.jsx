import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
export const MuiChip = () => {
  return (
    <Stack spacing={1} direction={"row"}>
      <Chip label="Chip" color="primary" variant="outlined"  icon={<FaceIcon />}/>
      <Chip
        label="Chip outlined"
        color="=secondary"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
    </Stack>
  );
};
