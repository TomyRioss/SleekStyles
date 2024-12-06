import NavBar from './components/NavBar/NavBar';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Routes,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import WhatsappLogo from './components/WhatsappLogo';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <WhatsappLogo />
    </>
  );
}

export default App;
