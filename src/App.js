import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import GitHubSearch from "./components/GitHubSearch";
import { AuthProvider } from "./components/Auth";
import { RequireAuth } from "./components/RequireAuth";
import FrontPage from "./components/FrontPage";

function App() {
  return (
    <AuthProvider>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/NetGen-Assignment" element={<FrontPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/githubsearch" element={<RequireAuth><GitHubSearch /></RequireAuth>} />
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
};

export default App;
