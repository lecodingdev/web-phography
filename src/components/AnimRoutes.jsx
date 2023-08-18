import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

export default function AnimRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode='wait'>
    <Routes key={location.pathname} location={location}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </AnimatePresence>
  )
}
