import { Helmet } from 'react-helmet-async';

export default function TermsOfServicePage() {
  return (
    <div className="pt-24 pb-20 relative">
      <Helmet>
        <title>Terms of Service | Proxima Care Partners</title>
      </Helmet>

      <section className="max-w-[800px] mx-auto px-4 sm:px-6 py-20 relative glow-teal">
        <h1 className="text-4xl font-bold text-white mb-10 animate-fade-in-up">
          Terms of <span className="text-teal-400">Service</span>
        </h1>
        
        <div className="glass-card rounded-2xl p-8 md:p-12 prose prose-invert prose-teal max-w-none animate-fade-in-up delay-100">
          <p className="text-slate-300 mb-6">Last Updated: October 2026</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-slate-300 mb-6">
            By accessing or using the Proxima Care Partners website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Services Description</h2>
          <p className="text-slate-300 mb-6">
            Proxima Care Partners provides medical billing, coding, and comprehensive revenue cycle management (RCM) services to healthcare facilities and practitioners. The specific scope of services is determined by individual service agreements.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. User Obligations</h2>
          <p className="text-slate-300 mb-6">
            You agree to provide accurate, complete, and current information as requested by our systems and staff to facilitate proper billing and compliance. You are responsible for ensuring that your own practices align with state and federal healthcare regulations.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Limitation of Liability</h2>
          <p className="text-slate-300 mb-6">
            In no event shall Proxima Care Partners, its directors, employees, or agents be liable for any indirect, punitive, incidental, special, or consequential damages arising out of or in any way connected with the use of our services.
          </p>
        </div>
      </section>
    </div>
  );
}
