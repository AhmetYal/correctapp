import React from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpeedCheck from "./component/speedcheck/SpeedCheck";
import Results from "./component/results/Results";
import Challenges from "./component/challenges/Challenges";

function App() {
  return (
    <div className="container pt-1">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<SpeedCheck />} />
          <Route path="/results" element={<Results />} />
          <Route path="/challenges" element={<Challenges />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
