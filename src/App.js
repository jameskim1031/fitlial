import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Page from './components/Page'
import TopBar from './components/TopBar';
import Workout from './components/Workout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page><TopBar /></Page>} />
        <Route path="/workout" element={<Workout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
