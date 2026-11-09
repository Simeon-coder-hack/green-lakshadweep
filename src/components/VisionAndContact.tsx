import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Mail, 
  User, 
  Building, 
  FileText, 
  Download, 
  ShieldCheck, 
  ArrowRight,
  AlertCircle
} from 'lucide-react';

export const VisionAndContact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    role: 'investor',
    interest: 'pilot-deployment',
    message: '',
    requestDeck: true
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.organization.trim()) errs.organization = 'Please provide your organization or affiliation.';
    if (!formData.message.trim() || formData.message.length < 15) {
      errs.message = 'Please provide a message with at least 15 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#21D4C4', '#36BFA6', '#ffffff']
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 900);
  };

  return (
    <section id="vision" className="py-24 bg-[#081522] text-white relative overflow-hidden border-t border-turquoise/15">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-turquoise/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Vision Statement */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-turquoise/10 border border-turquoise/30 text-turquoise font-mono text-xs uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-turquoise" />
            <span>Founding Vision & Mission</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-white">
            LET’S BUILD AN ISLAND <br />
            <span className="bg-gradient-to-r from-turquoise via-seagreen to-white bg-clip-text text-transparent">
              THAT RUNS ON NATURE.
            </span>
          </h2>

          <p className="mt-6 text-lg sm:text-2xl text-softgrey/85 font-normal leading-relaxed max-w-3xl mx-auto">
            "Clean energy is not just about generating electricity. It is about protecting the future of our islands."
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-softgrey/70 font-mono">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-turquoise" /> Zero Carbon Atolls
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-seagreen" /> Marine Ecosystem Protection
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-400" /> Economic Energy Sovereignty
            </span>
          </div>
        </div>

        {/* Stakeholder Engagement & Contact Form */}
        <div className="max-w-3xl mx-auto glass-panel p-6 sm:p-10 rounded-3xl border border-turquoise/30 shadow-2xl">
          
          <div className="mb-8 pb-6 border-b border-white/10 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-turquoise uppercase tracking-wider block">
                Stakeholder Collaboration Gateway
              </span>
              <h3 className="text-2xl font-display font-bold text-white mt-1">
                Partner with Green Lakshadweep
              </h3>
            </div>
            <div className="text-xs font-mono text-softgrey/60">
              Response SLA: &lt; 24 Business Hours
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-5 animate-in fade-in duration-500">
              <div className="w-16 h-16 rounded-full bg-turquoise/20 border-2 border-turquoise flex items-center justify-center text-turquoise mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="text-2xl font-display font-black text-white">
                Inquiry Successfully Transmitted
              </h4>

              <p className="text-sm text-softgrey/85 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.fullName}</strong>. Your inquiry has been routed to our founding engineering and partnerships team.
              </p>

              {formData.requestDeck && (
                <div className="p-4 rounded-2xl bg-ocean-surface border border-turquoise/30 max-w-md mx-auto flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5 text-left">
                    <FileText className="w-5 h-5 text-turquoise shrink-0" />
                    <div>
                      <div className="font-bold text-white">Executive Whitepaper & Financial Model</div>
                      <div className="text-[10px] text-softgrey/60 font-mono">PDF • 28 Pages • v2.4 (2026)</div>
                    </div>
                  </div>
                  <button
                    onClick={() => alert('Simulated PDF Download: "Green_Lakshadweep_Whitepaper_2026.pdf" downloaded.')}
                    className="px-3 py-1.5 rounded-xl bg-turquoise text-ocean-deep font-bold text-xs flex items-center gap-1 hover:bg-turquoise-light transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              )}

              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-softgrey/60 hover:text-turquoise underline font-mono pt-4"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-softgrey flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-turquoise" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Dr. Sarah Menon"
                    className={`w-full px-4 py-3 rounded-xl bg-ocean-surface border ${
                      errors.fullName ? 'border-rose-500' : 'border-white/10 focus:border-turquoise'
                    } text-sm text-white placeholder-softgrey/40 focus:outline-none transition-colors`}
                  />
                  {errors.fullName && <p className="text-[11px] text-rose-400 font-mono">{errors.fullName}</p>}
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-softgrey flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-turquoise" />
                    <span>Professional Email *</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah.menon@ocean-institute.org"
                    className={`w-full px-4 py-3 rounded-xl bg-ocean-surface border ${
                      errors.email ? 'border-rose-500' : 'border-white/10 focus:border-turquoise'
                    } text-sm text-white placeholder-softgrey/40 focus:outline-none transition-colors`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-400 font-mono">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Organization / Affiliation */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-softgrey flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-turquoise" />
                    <span>Organization / Affiliation *</span>
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. National Marine Tech Lab / Clean Capital Fund"
                    className={`w-full px-4 py-3 rounded-xl bg-ocean-surface border ${
                      errors.organization ? 'border-rose-500' : 'border-white/10 focus:border-turquoise'
                    } text-sm text-white placeholder-softgrey/40 focus:outline-none transition-colors`}
                  />
                  {errors.organization && <p className="text-[11px] text-rose-400 font-mono">{errors.organization}</p>}
                </div>

                {/* Stakeholder Role */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-softgrey flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-turquoise" />
                    <span>Stakeholder Category *</span>
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-ocean-surface border border-white/10 focus:border-turquoise text-sm text-white focus:outline-none transition-colors"
                  >
                    <option value="investor">Impact Investor / Venture Capital</option>
                    <option value="government">Government / UT Administration / PSU</option>
                    <option value="research">Academic & Research Institution (IIT / NIOT / CSIR)</option>
                    <option value="technology-oem">Marine Technology & Wind/Wave OEM</option>
                    <option value="media">Media & Environmental Journalist</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-softgrey flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-turquoise" />
                  <span>Collaboration Inquiry / Research Interest *</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your interest in pilot deployment, bathymetric data collaboration, grant syndication or technology demonstration..."
                  className={`w-full px-4 py-3 rounded-xl bg-ocean-surface border ${
                    errors.message ? 'border-rose-500' : 'border-white/10 focus:border-turquoise'
                  } text-sm text-white placeholder-softgrey/40 focus:outline-none transition-colors resize-none`}
                />
                {errors.message && <p className="text-[11px] text-rose-400 font-mono">{errors.message}</p>}
              </div>

              {/* Whitepaper Checkbox */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-ocean-surface/60 border border-white/5">
                <input
                  type="checkbox"
                  id="requestDeck"
                  checked={formData.requestDeck}
                  onChange={(e) => setFormData({ ...formData, requestDeck: e.target.checked })}
                  className="w-4 h-4 rounded text-turquoise focus:ring-turquoise accent-turquoise cursor-pointer"
                />
                <label htmlFor="requestDeck" className="text-xs text-softgrey cursor-pointer select-none">
                  Include the Green Lakshadweep Comprehensive Feasibility Whitepaper & Financial Model (v2.4)
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-turquoise via-seagreen to-turquoise hover:from-turquoise-light hover:to-seagreen-light text-ocean-deep font-bold text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(33,212,196,0.4)] hover:shadow-[0_0_35px_rgba(33,212,196,0.7)] flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>TRANSMITTING INQUIRY...</span>
                ) : (
                  <>
                    <span>SUBMIT INQUIRY & ACCESS WHITE PAPERS</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="text-[11px] text-softgrey/50 text-center font-mono">
                By submitting, you agree to technical communication in accordance with international clean tech partnership protocols.
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
