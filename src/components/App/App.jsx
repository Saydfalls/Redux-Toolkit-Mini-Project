import React, { lazy, Suspense } from "react";
import NavBar from '../NavBar/NavBar';
import "./App.module.css";

import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import('../HomePage/HomePage'));
const Counter = lazy(() => import('../Counter/Counter'));
const ShipTracker = lazy(() => import('../ShipTracker/ShipTracker'));
const GoalTracker = lazy(() => import ('../GoalTracker/GoalTracker'));

const App = () => {
  return (
    // The `App` component renders a `container` div that holds the `Counter` component.
    <div>
      <NavBar />
      <Suspense>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/counter" element={ <Counter /> } />
          <Route path="/shiptracker" element={ <ShipTracker /> } />
          <Route path="/goaltracker" element={ <GoalTracker /> } />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;