import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import SpecialtiesPage from './pages/SpecialtiesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import RcmProcessPage from './pages/RcmProcessPage';
import DemoReportPage from './pages/DemoReportPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import HipaaPolicyPage from './pages/HipaaPolicyPage';
import BillingFaqsPage from './pages/BillingFaqsPage';
import SecurityPage from './pages/SecurityPage';
import EmergencyContactPage from './pages/EmergencyContactPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <div className="relative">
      <ScrollToTop />
      <Header />
      <SideNav />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/specialties" element={<SpecialtiesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/rcm-process" element={<RcmProcessPage />} />
          <Route path="/demo-report" element={<DemoReportPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/hipaa-policy" element={<HipaaPolicyPage />} />
          <Route path="/billing-faqs" element={<BillingFaqsPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/emergency" element={<EmergencyContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
