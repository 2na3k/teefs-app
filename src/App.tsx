// src/App.tsx
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { ThemeProvider } from './components/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="teefs-theme">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;