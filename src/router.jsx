import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import ReviewPage from './pages/ReviewPage';

const AnimatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/opiniones" element={<ReviewPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

const AppRouter = () => (
  <Router>
    <Header />
    <AnimatedRoutes />
  </Router>
);

export default AppRouter;
