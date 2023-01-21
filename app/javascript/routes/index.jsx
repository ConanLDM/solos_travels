import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Destinations from "../components/Destinations";
import Destination from "../components/Destination";
import NewDestination from "../components/NewDestination";

// make sure import above matches up with the routes below

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/destination/:id" element={<Destination />} />
      <Route path="/destination" element={<NewDestination />} />
    </Routes>
  </Router>
);