import { Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function HomePage() {
  return (
    <>
      <Typography variant="h2">Create React App</Typography>
      <AddIcon fontSize="large" sx={{ margin: '1rem 0' }} />
      <Typography variant="h2">Material UI</Typography>
    </>
  );
}
