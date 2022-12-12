import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import CaesarCipher from './components/CaesarCipher';
import Nav from './components/Nav';

function App() {
  return (
    <Box
      bgImg="url('./cosmic-doodle-nz.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      h="100vh"
    >
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/caesar_cipher" element={<CaesarCipher />} />
        </Routes>
      </HashRouter>
    </Box>
  );
}

export default App;
