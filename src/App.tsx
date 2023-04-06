import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Users from "./pages/Users/Users";

const App = () => {
  return (
    // <ErrorBoundary>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Users />} />
      </Routes>
    </Router>
    // </ErrorBoundary>
  );
};

export default App;
