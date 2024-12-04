import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Home = lazy(() => import('./pages/Home'));
const Interest = lazy(() => import('./pages/Interest'));
const Skills = lazy(() => import('./pages/Skills'));
const Experience = lazy(() => import('./pages/Experience'));
const Achievements = lazy(() => import('./pages/Achievements'));
const Education = lazy(() => import('./pages/Education'));
const Freelance = lazy(() => import('./pages/Freelance'));

const App = () => {
  return (
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/interest" element={<Interest/>}></Route>
        <Route path="/skills" element={<Skills/>}></Route>
        <Route path="/experience" element={<Experience/>}></Route>
        <Route path="/freelance" element={<Freelance/>}></Route>
        <Route path="/achievements" element={<Achievements/>}></Route>
        <Route path="/education" element={<Education/>}></Route>
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App;