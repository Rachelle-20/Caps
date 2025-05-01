import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import TDashboard from './pages/Student/TDashboard';
import Login from './Auth/Login';
import Signup from './Auth/Signup';


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Navigate to="/login" />} /> */}
        <Route path="*" element={<MainLayout />}>
          <Route path="TDashboard" element={<TDashboard />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
