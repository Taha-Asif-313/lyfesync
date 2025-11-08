import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Pages
import LandingPage from "./pages/site/LandingPage";
import TodoApp from "./Components/TodoApp";
import ProfilePage from "./pages/auth/ProfilePage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";

const App = () => {
  return (
    <Router>
      <div className="w-full bg-black min-h-screen flex flex-col justify-center items-center text-white">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tasks" element={<TodoApp />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
};

export default App;
