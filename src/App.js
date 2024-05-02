import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import CreateWallet from './Pages/CreateWallet';
import SignUp from './Pages/SignUp';
import Wallet from './Pages/Wallet';

// Import any necessary layout or error handling components (optional)

function App() {
  return (
    <Router>
      <Routes>
        {/* Login route, potentially with layout or error handling */}
        <Route path="/" element={<Login />} />

        {/* CreateWallet route, potentially with layout or error handling */}
        <Route path="/createwallet" element={<CreateWallet />} />

        {/* SignUp route, potentially with layout or error handling */}
        <Route path="/signup" element={<SignUp />} />

        {/* Wallet route, potentially with layout or error handling */}
        <Route path="/wallet" element={<Wallet />} />

        {/* Add a catch-all route for unmatched paths (optional) */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
