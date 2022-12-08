import { Routes, Route } from 'react-router-dom';
import ControlRoute from './components/ControlRoute';
import Homepage from './pages/Homepage';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route element={ <ControlRoute /> }>
        <Route path="/oi" element={<span>NO_PAGE</span>} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<span>NO_PAGE</span>} />
    </Routes>
  );
}

export default App;
