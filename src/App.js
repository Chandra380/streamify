import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
// a box is nothing more than a div element
import { VideoDetail, SearchFeed, Navbar, Feed } from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000', overflow:'hidden' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />}/>
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;