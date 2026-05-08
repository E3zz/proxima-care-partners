import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function DemoReportPage() {
  return (
    <div className="pt-24 pb-20 relative">
      <Helmet>
        <title>Demo Report | Proxima Care Partners</title>
        <meta name="description" content="View our interactive demo report detailing facility finance and revenue performance." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 text-center glow-teal border-b border-white/5">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
          Facility <span className="text-teal-400">Finance Demo Report</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-300 animate-fade-in-up delay-100">
          An executive-level overview of collection rates, outstanding A/R, and revenue growth. Discover how our analytics transform raw data into actionable strategies.
        </p>
      </section>

      {/* Report Dashboard Mockup */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 animate-fade-in-up delay-200">
        <div className="glass-card rounded-3xl p-6 md:p-10 border border-teal-500/20 shadow-2xl shadow-black/50">
          
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-6 border-b border-white/10">
            <div>
              <h2 className="text-2xl font-bold text-white">Monthly Financial Summary</h2>
              <p className="text-sm text-slate-400">Generated for Q3 Sample Facility</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <span className="pill-teal"><span className="material-symbols-outlined text-[14px]">calendar_month</span> Sep 2026</span>
              <span className="pill-teal bg-emerald-500/10 text-emerald-400 border-emerald-500/20"><span className="material-symbols-outlined text-[14px]">trending_up</span> +14% Growth</span>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { title: 'Total Collections', value: '$1.42M', change: '+8.2%', icon: 'account_balance_wallet' },
              { title: 'First-Pass Clean Claim', value: '98.5%', change: '+1.5%', icon: 'fact_check' },
              { title: 'A/R \u003E 90 Days', value: '12%', change: '-4.3%', icon: 'hourglass_bottom' },
            ].map((kpi, index) => (
              <div key={index} className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-teal-500/30 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center">
                    <span className="material-symbols-outlined">{kpi.icon}</span>
                  </div>
                  <span className={`text-sm font-bold ${kpi.change.startsWith('+') ? 'text-emerald-400' : 'text-emerald-400'}`}>
                    {kpi.change}
                  </span>
                </div>
                <h3 className="text-slate-400 text-sm uppercase tracking-wider font-semibold mb-1">{kpi.title}</h3>
                <div className="text-3xl font-bold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>{kpi.value}</div>
              </div>
            ))}
          </div>

          {/* Charts area mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#051125] rounded-2xl p-6 border border-white/5">
              <h3 className="text-white font-bold mb-6">Revenue Trend</h3>
              {/* Fake Chart Lines */}
              <div className="h-48 flex items-end justify-between gap-2 relative">
                {/* Y-axis lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                  <div className="border-t border-slate-500 w-full" />
                  <div className="border-t border-slate-500 w-full" />
                  <div className="border-t border-slate-500 w-full" />
                  <div className="border-t border-slate-500 w-full" />
                </div>
                {[40, 55, 45, 70, 65, 85, 95].map((height, i) => (
                  <div key={i} className="w-full bg-gradient-to-t from-teal-600 to-teal-400 rounded-t-sm" style={{ height: `${height}%` }} />
                ))}
              </div>
              <div className="flex justify-between mt-4 text-xs text-slate-500 font-medium">
                <span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span>
              </div>
            </div>

            <div className="bg-[#051125] rounded-2xl p-6 border border-white/5">
              <h3 className="text-white font-bold mb-6">Denial Reasons</h3>
              <div className="space-y-4">
                {[
                  { reason: 'Eligibility / Registration', percent: 45, color: 'bg-teal-500' },
                  { reason: 'Duplicate Claim', percent: 25, color: 'bg-emerald-500' },
                  { reason: 'Missing Information', percent: 20, color: 'bg-blue-500' },
                  { reason: 'Timely Filing', percent: 10, color: 'bg-indigo-500' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>{item.reason}</span>
                      <span>{item.percent}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.percent}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Call to action */}
      <section className="text-center py-10">
        <h2 className="text-2xl font-bold text-white mb-4">Want these metrics for your facility?</h2>
        <Link to="/contact" className="inline-flex bg-teal-600 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-lg shadow-[0_0_20px_rgba(13,148,136,0.3)] hover:bg-teal-500 transition-colors">
          Schedule Your Assessment
        </Link>
      </section>
    </div>
  );
}
