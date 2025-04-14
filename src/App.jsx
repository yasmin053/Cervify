import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LoadingScreen from "./assets/Loadingscreen.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import ModelInterface from "./pages/ModelInterface.jsx";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 10;
        clearInterval(interval);
        return prev;
      });
    }, 300);

    const fadeTimer = setTimeout(() => setFadeOut(true), 3500);
    const stopLoadingTimer = setTimeout(() => setIsLoading(false), 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimer);
      clearTimeout(stopLoadingTimer);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen progress={progress} fadeOut={fadeOut} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/model" element={<ModelInterface />} />

        
        {/* Optional: Redirect any unknown route to home or 404 later */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
