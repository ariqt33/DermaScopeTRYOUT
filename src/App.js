import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import GettingStarted from './gettingstarted';
import Login from './login';
import Register from './register';
import SkincareTips from './skincaretips';
import Skinhealth from './skinhealth';
import FAQ from './faq';
import UploadPhoto from './uploadphoto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/skincaretips" element={<SkincareTips />} />
        <Route path="/skinhealth" element={<Skinhealth />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/uploadphoto" element={<UploadPhoto />} />
      </Routes>
    </Router>
  );
}

export default App;
