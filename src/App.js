import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import HomePage from './pages';
import AboutPage from './pages/about';
import NotFoundPage from './pages/not-found';
import AppLayout from './_shared/layouts/app/AppLayout';

export default function App() {
  const bla = '';
  
  return (
    <BrowserRouter>
      <Box
        sx={{
          backgroundColor: 'primary.dark',
          color: 'white',
          minHeight: '100vh',
        }}
      >
        <Routes>
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/" element={<AppLayout />}>
                      <Route index element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
