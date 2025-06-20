import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import Disclaimer from './components/Disclaimer';
import TeamMemberDetail from './components/TeamMemberDetail';
import ServiceDetail from './components/ServiceDetail';
import BlogDetail from './components/BlogDetail';
import Learning from './pages/Learning';
import TandC from './pages/tandc';
import PrivacyPolicy from './pages/privacypolicy';


const App = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

   useEffect(() => {
    const disclaimerAgreed = sessionStorage.getItem('disclaimerAgreed');
    if (!disclaimerAgreed) {
      setShowDisclaimer(true);
    }
  }, []);

  const handleAgree = () => {
    sessionStorage.setItem('disclaimerAgreed', 'true');
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
          <Route path="blog" element={<Blog />} />
          <Route path="privacy policy" element={<PrivacyPolicy />} />
          <Route path="terms and condition" element={<TandC />} />
          <Route path="/legal learning" element={<Learning/>} />
          <Route path="/blog/:slug" element={<BlogDetail />} />   {/* Added route */}
          <Route path="contact" element={<Contact />} />
          <Route path="team/:name" element={<TeamMemberDetail />} /> {/* ✅ Added route */}
          <Route path="/practise areas/:slug" element={<ServiceDetail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;