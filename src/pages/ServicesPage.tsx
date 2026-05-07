import { useRef, useEffect, useState } from 'react';
import SEO from '../components/SEO';
import CTA from '../components/CTA';

function useInView(threshold = 0.02) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
    }, { threshold, rootMargin: '50px' });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const services = [
  {
    icon: 'account_balance_wallet',
    title: 'End-to-End Revenue Cycle Management',
    description: 'Comprehensive oversight of your entire financial ecosystem - from patient registration and eligibility verification through charge capture, claims submission, payment posting, and final reconciliation.',
    details: [
      'Patient registration & demographic verification',
      'Insurance eligibility & benefits verification',
      'Charge capture & coding review',
      'Claims submission & tracking',
      'Payment posting & reconciliation',
      'Accounts receivable follow-up',
    ],
    highlight: true,
  },
  {
    icon: 'fact_check',
    title: 'Claims Scrubbing & Clean Claims',
    description: 'Our AI-assisted pre-submission audits achieve a 99% clean claim rate on first submission, dramatically reducing your payer turnaround time and accelerating cash flow.',
    details: [
      'Automated claim validation',
      'Coding accuracy review (ICD-10, CPT, HCPCS)',
      'Payer-specific rule compliance',
      'Real-time error identification & correction',
    ],
    highlight: false,
  },
  {
    icon: 'gavel',
    title: 'Denial Management & Appeals',
    description: 'Our specialized appeals team aggressively fights for every dollar owed. We analyze denial patterns and build targeted appeal strategies to overturn unjust decisions.',
    details: [
      'Root cause denial analysis',
      'Level 1 & 2 appeals management',
      'External review submissions',
      'Payer trend reporting',
    ],
    highlight: false,
  },
  {
    icon: 'monitoring',
    title: 'Advanced Analytics & Real-Time Reporting',
    description: 'Custom KPI dashboards, payer performance benchmarking, and trend analysis give you the data needed to make confident strategic decisions at any time.',
    details: [
      'Custom KPI dashboards',
      'Payer performance benchmarking',
      'Revenue forecasting',
      'Weekly & monthly performance reports',
    ],
    highlight: false,
  },
  {
    icon: 'local_hospital',
    title: 'Credentialing & Enrollment',
    description: 'Streamlined provider enrollment and payer credentialing services to ensure your physicians are always in-network and billing-ready.',
    details: [
      'Provider enrollment & revalidation',
      'CAQH maintenance',
      'Multi-payer credentialing',
      'Hospital privileging support',
    ],
    highlight: false,
  },
  {
    icon: 'verified_user',
    title: 'Compliance & Audit Support',
    description: 'We maintain your billing practices to the highest regulatory standards, providing comprehensive audit support and proactive risk mitigation.',
    details: [
      'HIPAA compliance audits',
      'Medical necessity reviews',
      'Pre-audit risk assessments',
      'RAC/MAC audit response',
    ],
    highlight: false,
  },
  {
    icon: 'assignment_turned_in',
    title: 'Prior Authorization',
    description: 'We manage the entire prior authorization process on your behalf - submitting requests, following up with payers, and resolving delays before they impact patient care or revenue.',
    details: [
      'Auth request submission',
      'Payer follow-up & escalation',
      'Peer-to-peer support coordination',
      'Auth tracking & reporting',
    ],
    highlight: false,
  },
  {
    icon: 'history',
    title: 'Retro Authorization',
    description: 'When prior auth is missed or retroactive approval is needed, our team handles the full retro-authorization process to protect your reimbursement and prevent claim denials after service delivery.',
    details: [
      'Retroactive auth submissions',
      'Medical necessity documentation',
      'Appeals for denied retro-auths',
      'Payer policy compliance review',
    ],
    highlight: false,
  },
  {
    icon: 'event_available',
    title: 'Patient Scheduling & Intake',
    description: 'Our patient scheduling and intake services streamline front-end workflows - from appointment booking and insurance verification to registration - reducing administrative burden and improving collections from day one.',
    details: [
      'Appointment scheduling',
      'Insurance verification at intake',
      'Demographic data collection',
      'Pre-visit eligibility checks',
    ],
    highlight: false,
  },
  {
    icon: 'payments',
    title: 'Payment Posting',
    description: 'Accurate, timely payment posting is critical to a healthy revenue cycle. We reconcile EOBs and ERAs, post all payer and patient payments, and identify underpayments for immediate follow-up.',
    details: [
      'ERA / EOB reconciliation',
      'Payer & patient payment posting',
      'Contractual adjustment review',
      'Underpayment identification',
    ],
    highlight: false,
  },
  {
    icon: 'swap_horiz',
    title: 'ERA / EDI Setup',
    description: 'We configure and manage Electronic Remittance Advice and Electronic Data Interchange connections with all major payers, eliminating paper-based delays and accelerating payment reconciliation.',
    details: [
      'Payer ERA enrollment',
      'EDI 837/835 transaction setup',
      'Clearinghouse configuration',
      'Electronic payment reconciliation',
    ],
    highlight: false,
  },
  {
    icon: 'account_balance',
    title: 'In-House Collections',
    description: 'Our compliant, patient-friendly collections approach maximizes recovery of outstanding balances while preserving the patient relationship - using proven communication strategies and flexible payment options.',
    details: [
      'FDCPA-compliant collections',
      'Balance follow-up workflows',
      'Flexible payment plans',
      'Bad debt recovery analysis',
    ],
    highlight: false,
  },
  {
    icon: 'receipt_long',
    title: 'Patient Statements',
    description: 'Clear, compliant, and patient-friendly billing statements delivered via mail or digital channels. We handle the full patient billing lifecycle - from statement generation to final payment.',
    details: [
      'Statement design & generation',
      'Paper & electronic delivery',
      'Payment portal integration',
      'Patient billing inquiries',
    ],
    highlight: false,
  },
  {
    icon: 'health_and_safety',
    title: 'Pre & Live Eligibility Verification',
    description: 'We verify patient insurance coverage before and at the time of service  catching coverage issues before they become denied claims and ensuring your team collects accurate patient responsibility upfront.',
    details: [
      'Pre-visit eligibility checks',
      'Real-time live verification',
      'Benefits & copay confirmation',
      'Coverage gap reporting',
    ],
    highlight: false,
  },
  {
    icon: 'rule',
    title: 'Coding QA & Audit',
    description: 'Our certified coding quality assurance team performs regular audits of your coded encounters to ensure accuracy, compliance, and maximum appropriate reimbursement - before and after claim submission.',
    details: [
      'Pre-bill coding audits',
      'Post-payment chart reviews',
      'Coder education & feedback',
      'Denial root cause & trending',
    ],
    highlight: false,
  },
];

export default function ServicesPage() {
  const { ref, inView } = useInView();

  return (
    <>
      <SEO
        title="Medical Billing Services | Proxima Care Partners"
        description="Explore Proxima Care Partners' comprehensive medical billing services: End-to-End RCM, Claims Scrubbing, Denial Appeals, Advanced Analytics, Credentialing, and Compliance Support."
        keywords="medical billing services, revenue cycle management, claims scrubbing, denial management, medical credentialing, HIPAA compliance"
        canonical="https://www.proximacarepartners.com/services"
      />

      {/* Page Hero */}
      <section className="pt-36 pb-20 bg-[#030d1a] grid-texture glow-teal relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-700/5 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="pill-teal mb-6 inline-flex">
            <span className="material-symbols-outlined text-[15px]">medical_services</span>
            Our Solutions
          </div>
          <h1
            className="font-bold text-white mb-6 max-w-3xl leading-tight"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(38px, 5vw, 56px)', letterSpacing: '-0.02em' }}
          >
            Comprehensive Revenue Cycle Solutions
          </h1>
          <p className="text-slate-400 max-w-2xl leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: '1.7' }}>
            Every service we offer is purpose-built for healthcare providers who demand precision, compliance, and measurable financial results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#051125] section-divider" ref={ref}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 flex flex-col transition-all duration-700 glass-card ${service.highlight
                  ? 'lg:col-span-2 shadow-lg relative overflow-hidden'
                  : ''
                  } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 80 + 100}ms` }}
              >
                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-teal-500/15 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[28px] text-teal-400">{service.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h2
                      className="font-bold text-white mb-3"
                      style={{ fontFamily: 'Manrope, sans-serif', fontSize: service.highlight ? '24px' : '20px' }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-slate-400 mb-5 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: '1.7' }}>
                      {service.description}
                    </p>
                    <div className={`grid gap-3 ${service.highlight ? 'sm:grid-cols-2 md:grid-cols-3' : 'sm:grid-cols-2'}`}>
                      {service.details.map((detail, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-slate-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                          <span className="material-symbols-outlined text-teal-400 text-[16px]">check_circle</span>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA 
        pillText="Custom Solutions"
        title={<>Need Additional Services? <br /><span className="text-shimmer">Give Us a Call</span></>}
        description="If you need specialized billing solutions or services not listed here, our experts can tailor a comprehensive plan designed specifically for your practice."
      />
    </>
  );
}
