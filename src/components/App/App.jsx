import React, { lazy, Suspense } from "react";
import NavBar from '../NavBar/NavBar';
import "./App.module.css";

import { Routes, Route } from "react-router-dom";

const Counter = lazy(() => import('../Counter/Counter'));
const ShipTracker = lazy(() => import('../ShipTracker/ShipTracker'));
const GoalTracker = lazy(() => import ('../GoalTracker/GoalTracker'));

const App = () => {
  return (
    // The `App` component renders a `container` div that holds the `Counter` component.
    <div className="container">
      <NavBar />
      <Suspense>
        <Routes>
          <Route path="/counter" element={ <Counter /> } />
          <Route path="/shiptracker" element={ <ShipTracker /> } />
          <Route path="/goaltracker" element={ <GoalTracker /> } />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
