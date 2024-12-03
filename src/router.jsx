import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import ReviewPage from './pages/ReviewPage';

// Variantes para la animación de las páginas
const pageVariants = {
  initial: {
    opacity: 0,
    y: 50, // La página entra desde abajo
  },
  animate: {
    opacity: 1,
    y: 0, // La página termina en su posición original
    transition: {
      duration: 0.6, // Duración de la animación
      ease: [0.25, 0.46, 0.45, 0.94], // Easing para una sensación suave
    },
  },
  exit: {
    opacity: 0,
    y: -50, // La página sale hacia arriba
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/menu"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Menu />
            </motion.div>
          }
        />
        <Route
          path="/opiniones"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ReviewPage />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <AboutUs />
            </motion.div>
          }
        />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </AnimatePresence>
  );
};

const AppRouter = () => (
  <Router>
    <Header />
    <AnimatedRoutes />
  </Router>
);

export default AppRouter;
