import { Helmet } from 'react-helmet-async';

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-20 relative">
      <Helmet>
        <title>Privacy Policy | Proxima Care Partners</title>
      </Helmet>

      <section className="max-w-[800px] mx-auto px-4 sm:px-6 py-20 relative glow-teal">
        <h1 className="text-4xl font-bold text-white mb-10 animate-fade-in-up">
          Privacy <span className="text-teal-400">Policy</span>
        </h1>
        
        <div className="glass-card rounded-2xl p-8 md:p-12 prose prose-invert prose-teal max-w-none animate-fade-in-up delay-100">
          <p className="text-slate-300 mb-6">Last Updated: October 2026</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Introduction</h2>
          <p className="text-slate-300 mb-6">
            Proxima Care Partners ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Information We Collect</h2>
          <p className="text-slate-300 mb-6">
            We collect several types of information from and about users of our Website, including information:
          </p>
          <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
            <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier ("personal information").</li>
            <li>That is about you but individually does not identify you.</li>
            <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="text-slate-300 mb-6">
            We use information that we collect about you or that you provide to us, including any personal information:
          </p>
          <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
            <li>To present our Website and its contents to you.</li>
            <li>To provide you with information, products, or services that you request from us.</li>
            <li>To fulfill any other purpose for which you provide it.</li>
            <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Contact Information</h2>
          <p className="text-slate-300 mb-6">
            To ask questions or comment about this privacy policy and our privacy practices, contact us at: <a href="mailto:privacy@proximacarepartners.com" className="text-teal-400 hover:underline">privacy@proximacarepartners.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
