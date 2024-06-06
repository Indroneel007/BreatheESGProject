import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Sidenav from './components/Sidenav/Sidenav';
import TrackerPage from './components/Sidenav/Tracker';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/data' element={<Sidenav />} />
        <Route path='/tracker' element={<TrackerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
