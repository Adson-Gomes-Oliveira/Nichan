import { Routes, Route } from 'react-router-dom';
import ControlRoute from './components/ControlRoute';
import AnimeDetails from './pages/AnimeDetails';
import Animes from './pages/Animes';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route element={<ControlRoute />}>
        <Route path="/animes" element={<Animes />} />
        <Route path="/animes/:id" element={<AnimeDetails />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<span>NO_PAGE</span>} />
    </Routes>
  );
}

export default App;
