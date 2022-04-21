import { Outlet } from 'react-router-dom';
import { Box, Container, Grid } from '@mui/material';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

export default function AppLayout() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh' }}
    >
      <Container maxWidth="md">
        <Navbar />
        <Box
          sx={{
            backgroundColor: 'primary.main',
            borderRadius: '0.5rem',
            minHeight: '220px',
            textAlign: 'center',
          }}
          p={8}
          mb={3}
        >
          <Outlet />
        </Box>
        <Footer />
      </Container>
    </Grid>
  );
}
