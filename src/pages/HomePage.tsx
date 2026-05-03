import Hero from '../components/Hero';
import ServicesBento from '../components/ServicesBento';
import Advantage from '../components/Advantage';
import Specialties from '../components/Specialties';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import SEO from '../components/SEO';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Proxima Care Partners | Expert Medical Billing & Revenue Cycle Management"
        description="Proxima Care Partners maximizes healthcare provider revenue through precision medical billing, claims scrubbing, denial appeals, and end-to-end RCM. HIPAA compliant. 98% collection rate."
        keywords="medical billing, revenue cycle management, RCM, healthcare billing, claims scrubbing, denial appeals, HIPAA compliant billing"
        canonical="https://www.proximacarepartners.com/"
      />
      <Hero />
      <ServicesBento />
      <Advantage />
      <Specialties />
      <Testimonials />
      <CTA />
    </>
  );
}
