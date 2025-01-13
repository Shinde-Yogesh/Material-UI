import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useState } from "react";

export const MuiChip = () => {
  const [chipData, setChipData] = useState(["Chip 1", "Chip 2", "Chip 3"]);
  const handleDelete = (chipToDelete) => () => {
    setChipData((chipData) =>
      chipData.filter((chipData) => chipData !== chipToDelete)
    );
  };
  return (
    <Stack spacing={1} direction={"row"}>
      <Chip
        label="Chip"
        color="primary"
        variant="outlined"
        icon={<FaceIcon />}
      />
      <Chip
        label="Chip outlined"
        color="=secondary"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip label="Click" color="success" onClick={() => alert("Clicked")} />
      <Chip label="Delete" color="error" onDelete={() => alert("Deleted")} />
    {
      chipData.map((data) => {
        return (
          <Chip
            key={data}
            label={data}
            onDelete={handleDelete(data)}
            color="primary"
          />
        );
      })
    }
    </Stack>
  );
};
