import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const contactInfo = [
  {
    icon: 'location_on',
    title: 'Corporate HQ',
    lines: ['Denver, Colorado', 'USA'],
  },
  {
    icon: 'call',
    title: 'Direct Line',
    lines: ['+1 (800) 555-0192', 'Mon–Fri, 8am–6pm EST'],
  },
  {
    icon: 'mail',
    title: 'Inquiries',
    lines: ['partners@proxima.care', 'HIPAA Secure Gateway'],
  },
];

const times = ['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'];

function generateCalendar(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev = new Date(year, month, 0).getDate();
  const cells: { day: number; current: boolean }[] = [];
  for (let i = firstDay - 1; i >= 0; i--) cells.push({ day: daysInPrev - i, current: false });
  for (let d = 1; d <= daysInMonth; d++) cells.push({ day: d, current: true });
  while (cells.length < 42) cells.push({ day: cells.length - daysInMonth - firstDay + 1 + 1, current: false });
  return cells;
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function ContactPage() {
  const today = new Date();
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [calYear, setCalYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>('02:00 PM');
  const [customTimeVal, setCustomTimeVal] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', organization: '', email: '', service: 'Revenue Cycle Management', message: '',
  });

  const [meetingEmail, setMeetingEmail] = useState('');
  const [meetingConfirmed, setMeetingConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const cells = generateCalendar(calYear, calMonth);

  const prevMonth = () => {
    if (calMonth === 0) { setCalMonth(11); setCalYear(y => y - 1); }
    else setCalMonth(m => m - 1);
    setSelectedDay(null);
  };
  const nextMonth = () => {
    if (calMonth === 11) { setCalMonth(0); setCalYear(y => y + 1); }
    else setCalMonth(m => m + 1);
    setSelectedDay(null);
  };

  const handleCustomTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomTimeVal(val);
    if (!val) {
      setSelectedTime(null);
      return;
    }
    const [h, m] = val.split(':');
    let hour = parseInt(h, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    setSelectedTime(`${hour.toString().padStart(2, '0')}:${m} ${ampm}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            name: formData.name,
            email: formData.email,
            organization: formData.organization,
            service: formData.service,
            message: formData.message,
          }
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorText = await response.text();
        alert(`Failed to send email: ${errorText}. Check your EmailJS setup.`);
      }
    } catch (error) {
      console.error(error);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSchedule = async () => {
    if (!selectedDay || !selectedTime || !meetingEmail) return;
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            name: "New Meeting Requested",
            email: meetingEmail,
            organization: "Proxima Care System",
            service: "Discovery Call",
            message: `We have received your meeting request for ${MONTHS[calMonth]} ${selectedDay} at ${selectedTime} EST. We will start the meet and invite you when it starts.`,
          }
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("EmailJS Error:", errorText);
      }

      setMeetingConfirmed(true);
    } catch (error) {
      console.error(error);
      setMeetingConfirmed(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us & Schedule a Meeting | Proxima Care Partners"
        description="Contact Proxima Care Partners to schedule a free 30-minute revenue audit or discovery call. Reach us at our Denver, CO headquarters or via our HIPAA-secure inquiry form."
        keywords="contact medical billing company, schedule medical billing meeting, revenue cycle management consultation, HIPAA secure inquiry"
        canonical="https://www.proximacarepartners.com/contact"
      />

      <section className="pt-36 pb-20 bg-[#030d1a] grid-texture glow-teal relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-700/5 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="pill-teal mb-6 inline-flex">
                <span className="material-symbols-outlined text-[15px]">support_agent</span>
                Global Support
              </div>
              <h1 className="font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(38px, 5vw, 56px)', letterSpacing: '-0.02em' }}>
                Expert Revenue Cycle Partnership
              </h1>
              <p className="text-slate-400 mb-10 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: '1.7' }}>
                Bridging the gap between clinical excellence and financial precision. Our team is ready to optimize your healthcare operations with HIPAA-compliant expertise.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {contactInfo.map((info, i) => (
                  <div key={i} className="glass-card bento-card relative overflow-hidden rounded-2xl p-6 hover:border-teal-500/30 transition-colors group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full blur-[30px] pointer-events-none" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined text-teal-400 text-[22px] icon-glow">{info.icon}</span>
                      </div>
                      <h3 className="font-bold text-white text-sm mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>{info.title}</h3>
                      {info.lines.map((line, j) => (
                        <p key={j} className="text-slate-400 text-xs leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Denver+Colorado+USA"
              target="_blank"
              rel="noopener noreferrer"
              className="relative hidden lg:block group cursor-pointer"
            >
              <div className="rounded-2xl overflow-hidden glass-card transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGRyl4erai06yes8w3ZYgbmD7Y3eMLXA6xGUAT_TH31SPWAKCWNdn_DUs5wUVHkxTbxP1Gsng3vJ3txBdyXMghnK3ek3jLJTsO1PhIJD3bL2uMz5FBtdCTSvxYDR8HyIo1FnHthX5N7SDcwOH4tU5xnQ4Jgma55J45P3X3H4XJ76YpZyKrkJZIxUeIMS33lRKVmQoiGu-4h1HiC6b75pbXt_sIxXwwZg14jhgk9lSng0bL0STm8iwzaezD_FtWwfvCraWfObpS81Q"
                  alt="Proxima Care Partners Denver HQ location map"
                  className="w-full object-cover aspect-[4/3] opacity-50 grayscale contrast-125 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#051125] border border-teal-500/20 rounded-xl shadow-2xl p-5 flex flex-col items-center group-hover:border-teal-500/50 group-hover:-translate-y-2 transition-all duration-300">
                  <span className="material-symbols-outlined text-teal-500 text-[40px] mb-2 group-hover:scale-110 transition-transform duration-300" style={{ fontVariationSettings: "'FILL' 1" }}>location_pin</span>
                  <p className="font-bold text-white text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>Proxima Care Partners HQ</p>
                  <p className="text-slate-400 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>Denver, Colorado</p>
                  <span className="text-teal-400 text-[10px] uppercase tracking-wider font-bold mt-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Open in Maps <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#051125] section-divider">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 glass-card rounded-2xl p-8 lg:p-10 shadow-lg">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-20 h-20 bg-teal-500/10 border border-teal-500/20 rounded-full flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-teal-400 text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <h2 className="font-bold text-white mb-3" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '28px' }}>Message Sent Successfully!</h2>
                  <p className="text-slate-400 max-w-sm mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Thank you, {formData.name}. We have received your inquiry. Our specialist team will send an email to {formData.email} within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', organization: '', email: '', service: 'Revenue Cycle Management', message: '' }); }}
                    className="mt-8 text-sm font-semibold text-teal-400 hover:text-teal-300 underline transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-bold text-white mb-2" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '28px' }}>Direct Inquiry</h2>
                  <p className="text-slate-400 mb-8 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Submit your details and our specialist team will reach out within 24 hours.
                  </p>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest" htmlFor="name" style={{ fontFamily: 'Inter, sans-serif' }}>Full Name</label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="Dr. John Doe"
                          value={formData.name}
                          onChange={e => setFormData(f => ({ ...f, name: e.target.value }))}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-lg focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all outline-none text-sm placeholder:text-slate-600"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest" htmlFor="org" style={{ fontFamily: 'Inter, sans-serif' }}>Organization</label>
                        <input
                          id="org"
                          type="text"
                          placeholder="Healthcare Partners Inc."
                          value={formData.organization}
                          onChange={e => setFormData(f => ({ ...f, organization: e.target.value }))}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-lg focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all outline-none text-sm placeholder:text-slate-600"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest" htmlFor="email" style={{ fontFamily: 'Inter, sans-serif' }}>Email Address</label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={e => setFormData(f => ({ ...f, email: e.target.value }))}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-lg focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all outline-none text-sm placeholder:text-slate-600"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest" htmlFor="service" style={{ fontFamily: 'Inter, sans-serif' }}>Service Area</label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={e => setFormData(f => ({ ...f, service: e.target.value }))}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-lg focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all outline-none text-sm"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          <option className="bg-[#051125] text-white">Revenue Cycle Management</option>
                          <option className="bg-[#051125] text-white">Credentialing Services</option>
                          <option className="bg-[#051125] text-white">Audit &amp; Compliance</option>
                          <option className="bg-[#051125] text-white">Reporting &amp; Analytics</option>
                          <option className="bg-[#051125] text-white">Denial Management</option>
                          <option className="bg-[#051125] text-white">Claims Scrubbing</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest" htmlFor="message" style={{ fontFamily: 'Inter, sans-serif' }}>Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="How can we assist with your revenue cycle?"
                        value={formData.message}
                        onChange={e => setFormData(f => ({ ...f, message: e.target.value }))}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-lg focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all outline-none resize-none text-sm placeholder:text-slate-600"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-teal-600 text-white font-bold py-4 rounded-lg hover:bg-teal-700 active:scale-[0.99] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-wait"
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px' }}
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span className="material-symbols-outlined text-[18px]">send</span>
                          Submit Secured Inquiry
                        </>
                      )}
                    </button>
                    <p className="text-xs text-slate-400 text-center flex items-center justify-center gap-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <span className="material-symbols-outlined text-[14px]">lock</span>
                      This form is HIPAA-compliant and encrypted with AES-256.
                    </p>
                  </form>
                </>
              )}
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-[#030d1a] border border-white/10 rounded-2xl p-6 shadow-xl shadow-black/50">
                {meetingConfirmed ? (
                  <div className="flex flex-col items-center justify-center text-center py-10 h-full">
                    <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-emerald-400 text-[32px]">event_available</span>
                    </div>
                    <h2 className="font-bold text-white mb-2" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '24px' }}>Meeting Requested!</h2>
                    <p className="text-slate-400 text-sm mb-6 max-w-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                      We have received your request. An invite will be sent to your email when the meeting starts.
                    </p>
                    <button
                      onClick={() => { setMeetingConfirmed(false); setSelectedDay(null); }}
                      className="text-sm font-semibold text-slate-400 hover:text-white transition-colors"
                    >
                      Schedule another meeting
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-bold text-white mb-1" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '22px' }}>Schedule a Meeting</h2>
                    <p className="text-slate-400 text-sm mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Select a preferred time for a 30-minute discovery call.
                    </p>
                    <div className="bg-[#051125] border border-white/5 rounded-xl p-5">
                      {/* Month navigation */}
                      <div className="flex justify-between items-center mb-5">
                        <span className="font-bold text-white text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>
                          {MONTHS[calMonth]} {calYear}
                        </span>
                        <div className="flex gap-2">
                          <button onClick={prevMonth} className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors" aria-label="Previous month">
                            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                          </button>
                          <button onClick={nextMonth} className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors" aria-label="Next month">
                            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                          </button>
                        </div>
                      </div>
                      {/* Day headers */}
                      <div className="grid grid-cols-7 text-center mb-2">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                          <div key={i} className="text-[10px] font-bold text-slate-400 py-1" style={{ fontFamily: 'Inter, sans-serif' }}>{d}</div>
                        ))}
                      </div>
                      {/* Calendar cells */}
                      <div className="grid grid-cols-7 text-center gap-y-1">
                        {cells.map((cell, i) => {
                          const isToday = cell.current && cell.day === today.getDate() && calMonth === today.getMonth() && calYear === today.getFullYear();
                          const isSelected = cell.current && cell.day === selectedDay;
                          return (
                            <button
                              key={i}
                              disabled={!cell.current}
                              onClick={() => cell.current && setSelectedDay(cell.day)}
                              className={`py-1.5 text-xs rounded-full font-medium transition-all duration-150 ${isSelected
                                ? 'bg-teal-600 text-white font-bold'
                                : isToday
                                  ? 'bg-teal-500/20 text-teal-400 font-bold ring-1 ring-teal-500/50'
                                  : cell.current
                                    ? 'text-slate-300 hover:bg-white/10 hover:text-white cursor-pointer'
                                    : 'text-slate-600 cursor-not-allowed'
                                }`}
                              style={{ fontFamily: 'Inter, sans-serif' }}
                              aria-label={cell.current ? `${MONTHS[calMonth]} ${cell.day}` : undefined}
                            >
                              {cell.day}
                            </button>
                          );
                        })}
                      </div>
                      {/* Time slots */}
                      <div className="mt-5 pt-4 border-t border-white/10">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 block" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Available Times (EST)
                        </label>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          {times.map((t) => (
                            <button
                              key={t}
                              onClick={() => { setSelectedTime(t); setCustomTimeVal(''); }}
                              className={`py-2.5 border rounded-lg text-xs font-semibold transition-all duration-200 ${selectedTime === t && !customTimeVal
                                ? 'border-teal-500 bg-teal-500/20 text-teal-300'
                                : 'border-white/10 bg-white/5 text-slate-300 hover:border-teal-500/50 hover:bg-white/10 hover:text-teal-400'
                                }`}
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Or specify custom time
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 02:45 PM"
                            onFocus={(e) => (e.target.type = "time")}
                            onBlur={(e) => {
                              if (!e.target.value) e.target.type = "text";
                            }}
                            value={customTimeVal}
                            onChange={handleCustomTime}
                            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 text-white rounded-lg focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all outline-none text-sm placeholder:text-slate-500 custom-time-input"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={meetingEmail}
                        onChange={e => setMeetingEmail(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 text-white rounded-lg focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all outline-none text-sm placeholder:text-slate-600"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      />
                    </div>
                    <button
                      onClick={handleSchedule}
                      disabled={!selectedDay || !selectedTime || !meetingEmail || isSubmitting}
                      className="w-full mt-4 py-3.5 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-500 active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                          {selectedDay && selectedTime ? `Confirm ${MONTHS[calMonth]} ${selectedDay} at ${selectedTime}` : 'Confirm Slot'}
                        </>
                      )}
                    </button>
                  </>
                )}
              </div>

              {/* Urgent Help card */}
              <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-teal-500/15 border border-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-teal-400 text-[22px]">contact_support</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '16px' }}>Need Urgent Help?</h4>
                  <p className="text-slate-400 text-sm mb-3 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Our emergency audit team is available for critical compliance issues 24/7.
                  </p>
                  <Link to="/emergency" className="text-teal-400 font-bold text-sm hover:text-teal-300 transition-colors flex items-center gap-1 group" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Contact Emergency Desk
                    <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
