import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';



import Homepage from './components/home/Homepage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/profile" element={<UserPage />} />
          {/* <Route path="/dashboard" element={<UserPage />} />
          <Route path="/logout" element={<UserPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
