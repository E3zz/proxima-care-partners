import { Helmet } from 'react-helmet-async';

export default function HipaaPolicyPage() {
  return (
    <div className="pt-24 pb-20 relative">
      <Helmet>
        <title>HIPAA Policy | Proxima Care Partners</title>
      </Helmet>

      <section className="max-w-[800px] mx-auto px-4 sm:px-6 py-20 relative glow-teal">
        <h1 className="text-4xl font-bold text-white mb-10 animate-fade-in-up">
          HIPAA <span className="text-teal-400">Compliance Policy</span>
        </h1>
        
        <div className="glass-card rounded-2xl p-8 md:p-12 prose prose-invert prose-teal max-w-none animate-fade-in-up delay-100">
          <p className="text-slate-300 mb-6">
            At Proxima Care Partners, safeguarding Protected Health Information (PHI) is our highest operational priority. We strictly adhere to all regulations set forth by the Health Insurance Portability and Accountability Act (HIPAA) and the Health Information Technology for Economic and Clinical Health (HITECH) Act.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Administrative Safeguards</h2>
          <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
            <li>Designated Privacy and Security Officers overseeing compliance.</li>
            <li>Mandatory, continuous HIPAA training for all employees and contractors.</li>
            <li>Strict role-based access controls ensuring PHI is only viewed by necessary personnel.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Physical Safeguards</h2>
          <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
            <li>Secure, access-controlled physical facilities with biometric entry points.</li>
            <li>Clean desk policies and secure disposal/shredding of any physical documents containing PHI.</li>
            <li>Workstation usage policies that prevent unauthorized viewing of screens.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Technical Safeguards</h2>
          <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
            <li>End-to-end encryption for all data in transit (AES-256) and at rest.</li>
            <li>Multi-factor authentication (MFA) required for all system access.</li>
            <li>Continuous network monitoring, intrusion detection, and automated audit logging.</li>
            <li>SOC 2 Type II certified cloud infrastructure.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Business Associate Agreements (BAA)</h2>
          <p className="text-slate-300 mb-6">
            We sign and rigorously uphold Business Associate Agreements with all our healthcare partners, ensuring full legal and operational alignment regarding the protection and handling of patient data.
          </p>
        </div>
      </section>
    </div>
  );
}
