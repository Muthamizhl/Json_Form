// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DemoFormPage from "./pages/DemoFormPage";
import FormBuilderPage from "./pages/FormBuilderPage"; // Import your FormBuilderPage
import BuiltFormDisplayPage from "./pages/BuiltFormDisplayPage"; // You'll create this next

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/demo" element={<DemoFormPage />} />
        <Route path="/build" element={<FormBuilderPage />} /> {/* New Route */}
        <Route path="/built-form" element={<BuiltFormDisplayPage />} /> {/* New Route */}
      </Routes>
    </Router>
  );
};

export default App;