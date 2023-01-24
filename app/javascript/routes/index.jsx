import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Destinations from "../components/Destinations";
import Destination from "../components/Destination";
import NewDestination from "../components/NewDestination";

export default (
  <Router>
    <Routes>
      <Route path="/" exact component={Home} />
      <Route path="/destinations" exact component={Destinations} />
      <Route path="/destination/:id" exact component={Destination} />
      <Route path="/destinations/new" element={<NewDestination />} />
    </Routes>
  </Router>
);