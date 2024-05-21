import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Page from './components/Page';
import TopBar from './components/TopBar';
import Workout from './components/Workout';
import WorkoutP from './components/WorkoutP';
import CalendarCard from './components/CalendarCard';
import ExampleWorkout from './components/ExampleWorkout';
// import Profile from './components/UserProfile';
import UserAuth from './components/auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/today" element={<Workout />} />
        <Route path="/todayP" element={<WorkoutP />} />
        <Route path="/calendar" element={<CalendarCard />}/>
        {/* <Route path="/profile" element={<Profile />}/> */}
        <Route path="/UserAuth" element={<UserAuth />}/>
        <Route path="/example" element={<ExampleWorkout />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
