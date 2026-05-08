import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function RcmProcessPage() {
  const steps = [
    {
      title: 'Patient Registration & Scheduling',
      description: 'The revenue cycle begins with collecting accurate demographic and insurance information before the patient even arrives. We ensure all pre-authorization and eligibility checks are cleared immediately.',
      icon: 'how_to_reg'
    },
    {
      title: 'Charge Capture & Coding',
      description: 'Services are converted into billable medical codes (ICD-10, CPT). Our certified AAPC coders review documentation to maximize charge capture and prevent downcoding.',
      icon: 'code'
    },
    {
      title: 'Claim Submission',
      description: 'We rigorously scrub claims for errors before submitting them via clearinghouses. Clean claims are essential for rapid reimbursement and minimizing denial rates.',
      icon: 'send'
    },
    {
      title: 'Payment Posting',
      description: 'Once payers adjudicate claims, we instantly post ERAs (Electronic Remittance Advices) and reconcile payments to ensure the ledger perfectly matches bank deposits.',
      icon: 'account_balance'
    },
    {
      title: 'Denial Management',
      description: 'Any rejected or denied claims are immediately flagged. Our specialists appeal and correct claims within 24 hours to aggressively recover lost revenue.',
      icon: 'gavel'
    },
    {
      title: 'Patient Collections',
      description: 'We provide transparent, easy-to-understand statements for patient responsibility balances, offering flexible payment plans and online portals for higher collection rates.',
      icon: 'payments'
    }
  ];

  return (
    <div className="pt-24 pb-20 relative">
      <Helmet>
        <title>RCM Process Explained | Proxima Care Partners</title>
        <meta name="description" content="Learn about our comprehensive Revenue Cycle Management process and how we optimize every step from registration to collection." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 text-center glow-teal">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
          The Complete <span className="text-teal-400">RCM Process</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-300 animate-fade-in-up delay-100">
          At Proxima Care Partners, we optimize every phase of the Revenue Cycle to maximize your facility's financial health, reduce administrative burden, and accelerate cash flow.
        </p>
      </section>

      {/* Steps Grid */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="glass-card rounded-2xl p-8 bento-card flex flex-col relative overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-[40px] pointer-events-none" />
              <div className="w-14 h-14 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[28px] text-teal-400 icon-glow">{step.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
                <span className="text-teal-500 mr-2">0{index + 1}.</span>{step.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm flex-grow">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[800px] mx-auto px-4 mt-20 text-center animate-fade-in-up delay-400">
        <div className="glass-card rounded-3xl p-10 border border-teal-500/30 glow-teal">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to optimize your cycle?</h2>
          <p className="text-slate-300 mb-8">Schedule a meeting with our RCM experts to see how we can apply these steps to your practice.</p>
          <Link to="/contact" className="inline-flex bg-teal-600 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-lg shadow-lg hover:bg-teal-500 transition-colors">
            Get a Free RCM Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
