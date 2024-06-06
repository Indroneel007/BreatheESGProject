import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useEffect, useState } from "react";
import SignUpPage from './pages/SignUpPage/SignUpPage';
import styled from 'styled-components';
import LoginPage from './pages/LoginPage/LoginPage';
import Sidenav from './components/Sidenav/Sidenav';
import TrackerPage from './components/Sidenav/Tracker';
import { auth } from "./components/firebase";

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
