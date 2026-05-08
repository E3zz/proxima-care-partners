import { Helmet } from 'react-helmet-async';

export default function BillingFaqsPage() {
  const faqs = [
    {
      question: "What is your average First-Pass Clean Claim rate?",
      answer: "We consistently maintain a First-Pass Clean Claim rate of over 98%. By utilizing advanced scrubbing software and certified coders, we ensure that the vast majority of your claims are accepted and paid upon initial submission."
    },
    {
      question: "How long does it take to see improvements in collection?",
      answer: "Most of our partners see a noticeable improvement in cash flow within the first 30 to 45 days. Complete stabilization and peak collection efficiency usually occur within the 90-day transition window."
    },
    {
      question: "Are your billing practices HIPAA compliant?",
      answer: "Absolutely. We maintain strict HIPAA compliance protocols across all operations. Our infrastructure is heavily secured, our staff undergoes continuous training, and we are SOC 2 Certified for data protection."
    },
    {
      question: "Do you handle prior authorizations?",
      answer: "Yes, our team can take on the entire burden of prior authorizations. We work directly with payers to secure approvals swiftly, preventing delayed or denied treatments."
    },
    {
      question: "What software do you work with?",
      answer: "We are software-agnostic and proficient in all major EHR and Practice Management systems, including Epic, Cerner, AthenaHealth, eClinicalWorks, and many specialized platforms."
    }
  ];

  return (
    <div className="pt-24 pb-20 relative">
      <Helmet>
        <title>Billing FAQs | Proxima Care Partners</title>
      </Helmet>

      <section className="max-w-[800px] mx-auto px-4 sm:px-6 py-20 relative glow-teal">
        <h1 className="text-4xl font-bold text-white mb-6 text-center animate-fade-in-up">
          Billing <span className="text-teal-400">FAQs</span>
        </h1>
        <p className="text-slate-400 text-center mb-16 animate-fade-in-up delay-100">
          Find answers to the most common questions about our Revenue Cycle Management services and transition process.
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card rounded-2xl p-6 animate-fade-in-up" style={{ animationDelay: `${(index * 100) + 200}ms` }}>
              <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                <span className="material-symbols-outlined text-teal-400 mt-0.5">help</span>
                {faq.question}
              </h3>
              <p className="text-slate-300 pl-9 leading-relaxed text-sm">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
