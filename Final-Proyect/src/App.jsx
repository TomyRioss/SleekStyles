import NavBar from './components/NavBar/NavBar';
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
import { db } from './config/firebaseConfig';

function App() {
  return (
    <>
      {console.log('ESTA ES UNA PRUBEA DE LA DATABASE:', db)}
      {console.log('PRUEBA DE COLECCION:', import.meta.env)}

      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
