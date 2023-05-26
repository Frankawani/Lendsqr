import React from "react";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
