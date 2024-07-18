import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationMenu from './Components/NavigationMenu';
import Home from './Pages/Home';
import Employee from './Pages/Employee';
import Vendor from './Pages/Vendor';
import './App.css';
import Admin from './Pages/Admin';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/vendor" element={<Vendor />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
