import React from 'react';
import Navbar from './components/Navbar/Navbar';
import WorldHouseList from './components/WorldHouseList/WorldHouseList';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <WorldHouseList/>
    </div>
  );
}

export default App;
