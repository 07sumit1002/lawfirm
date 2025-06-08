import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import Disclaimer from './components/Disclaimer';
import TeamMemberDetail from './pages/TeamMemberDetail';


const App = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  const handleAgree = () => {
    setShowDisclaimer(false);
  };

  return (
    <Router>
      <ScrollToTop />
      {showDisclaimer && <Disclaimer onAgree={handleAgree} />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="practise areas" element={<Services />} />
          {/*<Route path="services/:id" element={<ServiceDetail />} />*/} {/* for internal linking */}
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="team/:name" element={<TeamMemberDetail />} /> {/* ✅ Added route */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;