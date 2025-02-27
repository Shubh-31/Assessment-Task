import './App.css';
import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Welcome from './Components/Welcome';
import ProfileUpdateScreen from './Components/ProfileUpdateScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/profileUpdate" element={<ProfileUpdateScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
