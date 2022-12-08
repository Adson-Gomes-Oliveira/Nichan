import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ControlRoute from './components/ControlRoute';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route element={ <ControlRoute /> }>

      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<span>NO_PAGE</span>} />
    </Routes>
  );
}

export default App;
