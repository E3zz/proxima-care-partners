import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function SecurityPage() {
  return (
    <div className="pt-24 pb-20 relative">
      <Helmet>
        <title>Security Standards | Proxima Care Partners</title>
        <meta name="description" content="Learn about our rigorous security standards, SOC 2 compliance, and how we protect sensitive healthcare data." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 text-center glow-teal">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
          Enterprise-Grade <span className="text-teal-400">Security</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-300 animate-fade-in-up delay-100">
          We treat your data with the highest level of protection. Our infrastructure is built to exceed healthcare compliance requirements, ensuring your PHI and financial data are safe.
        </p>
      </section>

      {/* Security Features */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'SOC 2 Type II Certified',
              desc: 'We undergo rigorous annual audits by independent third parties to verify our security, availability, processing integrity, confidentiality, and privacy controls.',
              icon: 'verified_user'
            },
            {
              title: 'End-to-End Encryption',
              desc: 'All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Key management is strictly controlled and audited.',
              icon: 'enhanced_encryption'
            },
            {
              title: 'Zero-Trust Architecture',
              desc: 'We employ a zero-trust network model. Every access request is strongly authenticated, authorized within policy constraints, and inspected for anomalies.',
              icon: 'gpp_maybe'
            },
            {
              title: 'Continuous Monitoring',
              desc: 'Our Security Operations Center (SOC) monitors infrastructure 24/7/365 using advanced AI-driven threat detection and automated response protocols.',
              icon: 'monitoring'
            }
          ].map((feature, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-8 bento-card flex flex-col relative overflow-hidden animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="w-14 h-14 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[28px] text-teal-400 icon-glow">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-[800px] mx-auto px-4 mt-20 text-center animate-fade-in-up delay-400">
        <div className="glass-card rounded-3xl p-10 border border-teal-500/30 glow-teal">
          <h2 className="text-3xl font-bold text-white mb-4">Secure your revenue cycle</h2>
          <p className="text-slate-300 mb-8">Partner with a team that values your data security as much as you do.</p>
          <Link to="/contact" className="inline-flex bg-teal-600 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-lg shadow-lg hover:bg-teal-500 transition-colors">
            Contact Our Security Team
          </Link>
        </div>
      </section>
    </div>
  );
}
