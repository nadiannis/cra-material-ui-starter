import { Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

export default function NotFoundPage() {
  return (
    <Box sx={{ textAlign: 'center' }} p={4}>
      <Box mb={4}>
        <Typography variant="h1" mb={2}>
          404
        </Typography>
        <Typography variant="h4" mb={2}>
          Oops! Page not found.
        </Typography>
      </Box>
      <Link to="/" style={{ color: '#FFD700' }}>
        Back to Home
      </Link>
    </Box>
  );
}
