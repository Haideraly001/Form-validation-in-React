import './App.css';
import Profile from './components/profile';
import InputProfiles from './components/input';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProfiles from './components/userProfiles';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InputProfiles />} />
        <Route path="/user-table" element={<Profile />} />
        <Route path="/user-table/:id" element={<UserProfiles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
