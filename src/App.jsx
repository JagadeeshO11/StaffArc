import { Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import NewsBar from './components/NewsBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeSubPages from './components/HomeSubPages';
import Explore from './components/Explore';
import WhyChoose from './components/WhyChoose';
import ServicesSubPages from './components/ServicesSubPages';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import AboutSubPages from './components/AboutSubPages';
import ResourcesSubPages from './components/ResourcesSubPages';
import Footer from './components/Footer';
import NetworkBackground from './components/NetworkBackground';
import Welcome from './pages/Welcome';
import Features from './pages/Features';
import CompanyProfile from './pages/CompanyProfile';
import NetworkInstallation from './pages/NetworkInstallation';
import FiberOptics from './pages/FiberOptics';
import WirelessSolutions from './pages/WirelessSolutions';
import SecuritySystems from './pages/SecuritySystems';
import Maintenance from './pages/Maintenance';
import Consulting from './pages/Consulting';
import OurLeaders from './pages/OurLeaders';
import ServiceLocations from './pages/ServiceLocations';
import Certifications from './pages/Certifications';
import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';
import Documentation from './pages/Documentation';
import ContactUs from './pages/ContactUs';
import './App.css';

function App() {
  return (
    <>
      <NetworkBackground />
      <TopBar />
      <NewsBar />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <HomeSubPages />
            <Explore />
            <WhyChoose />
            <ServicesSubPages />
            <Clients />
            <Testimonials />
            <AboutSubPages />
            <ResourcesSubPages />
          </>
        } />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/features" element={<Features />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/network-installation" element={<NetworkInstallation />} />
        <Route path="/fiber-optics" element={<FiberOptics />} />
        <Route path="/wireless-solutions" element={<WirelessSolutions />} />
        <Route path="/security-systems" element={<SecuritySystems />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/our-leaders" element={<OurLeaders />} />
        <Route path="/service-locations" element={<ServiceLocations />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
