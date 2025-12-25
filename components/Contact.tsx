
import React, { useState } from 'react';
import { Mail, MessageCircle, Send, ShoppingCart, ExternalLink, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        form.reset();
      } else {
        setErrorMessage(result.message || 'Submission failed. Please try again.');
        setStatus('error');
      }
    } catch (err) {
      setErrorMessage('Network error. Please check your connection or reach out via WhatsApp.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-12 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 rounded-[2rem] lg:rounded-[3rem] p-6 sm:p-10 lg:p-16 text-white relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
          {/* Decorative Background Blob */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-indigo-600/20 rounded-full blur-[80px] lg:blur-[120px] translate-x-1/4 -translate-y-1/4"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
            {/* Left Column: Direct Contact Info */}
            <div className="space-y-8 lg:space-y-10 text-center lg:text-left">
              <div>
                <span className="text-indigo-400 font-extrabold tracking-[0.2em] lg:tracking-[0.3em] uppercase text-[10px] lg:text-xs mb-3 lg:mb-4 block">Let's Talk Business</span>
                <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-4 lg:mb-6">Ready to scale your brand?</h2>
                <p className="text-zinc-400 text-base lg:text-xl font-medium max-w-sm mx-auto lg:mx-0">
                  Secure your project through Fiverr or contact me directly for a custom quote.
                </p>
              </div>
              
              <div className="space-y-4 lg:space-y-6">
                {/* Fiverr CTA */}
                <a 
                  href="https://www.fiverr.com/s/5rZpYav" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-2xl p-2 transition-all"
                >
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-emerald-600/20 rounded-xl lg:rounded-2xl flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-600 group-hover:border-emerald-500 transition-all duration-300">
                    <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-400 group-hover:text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-[8px] lg:text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Secure Order on Fiverr</h4>
                    <p className="text-lg lg:text-xl font-bold group-hover:text-emerald-400 transition-colors flex items-center justify-center sm:justify-start gap-2">
                      fiverr.com/s/5rZpYav
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </p>
                  </div>
                </a>

                {/* Email Info */}
                <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 group p-2">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/5 rounded-xl lg:rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-300">
                    <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-indigo-400 group-hover:text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-[8px] lg:text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Email Inquiry</h4>
                    <p className="text-lg lg:text-xl font-bold">contact.mashal.studios@gmail.com</p>
                  </div>
                </div>

                {/* WhatsApp Info */}
                <a 
                  href="https://wa.me/923045571667" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 group focus:outline-none focus:ring-2 focus:ring-green-500 rounded-2xl p-2 transition-all"
                >
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-green-600/20 rounded-xl lg:rounded-2xl flex items-center justify-center border border-green-500/20 group-hover:bg-green-600 group-hover:border-green-500 transition-all duration-300">
                    <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 text-green-400 group-hover:text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-[8px] lg:text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Instant Chat</h4>
                    <p className="text-lg lg:text-xl font-bold group-hover:text-green-400 transition-colors">WhatsApp: +92 304 5571667</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Web3Forms Contact Form */}
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 lg:p-10 backdrop-blur-sm shadow-2xl relative min-h-[400px] flex flex-col justify-center">
              {status === 'success' ? (
                <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-indigo-500/20">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black uppercase tracking-tight">Message Received!</h3>
                    <p className="text-zinc-400 font-medium">I'll get back to you within 24 hours.</p>
                  </div>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-xs font-black uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit}
                  className={`space-y-4 lg:space-y-6 transition-opacity duration-300 ${status === 'submitting' ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}
                >
                  {/* IMPORTANT: REPLACE THE VALUE BELOW WITH YOUR WEB3FORMS ACCESS KEY */}
                  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                  
                  {/* Anti-Spam Honeypot */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div className="space-y-2">
                      <label htmlFor="full-name" className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Full Name</label>
                      <input name="name" id="full-name" type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 lg:px-5 lg:py-4 focus:outline-none focus:border-indigo-500 transition-all text-sm font-bold placeholder-zinc-700" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Email Address</label>
                      <input name="email" id="email" type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 lg:px-5 lg:py-4 focus:outline-none focus:border-indigo-500 transition-all text-sm font-bold placeholder-zinc-700" placeholder="john@company.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-subject" className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Service Category</label>
                    <select 
                      name="subject"
                      id="contact-subject"
                      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 lg:px-5 lg:py-4 focus:outline-none focus:border-indigo-500 transition-all text-sm font-bold appearance-none text-zinc-200"
                    >
                      <option value="Meta Ads Management">Meta Ads Management</option>
                      <option value="Website Design (Shopify/WP)">Website Design (Shopify/WP)</option>
                      <option value="Custom Code Development">Custom Code Development</option>
                      <option value="Custom Subject">Custom Subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Your Message</label>
                    <textarea 
                      name="message"
                      id="contact-message"
                      required
                      rows={4} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 lg:px-5 lg:py-4 focus:outline-none focus:border-indigo-500 transition-all text-sm font-bold resize-none placeholder-zinc-700" 
                      placeholder="How can I help you grow today?"
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 text-xs font-bold p-3 bg-red-400/10 rounded-xl animate-in fade-in slide-in-from-top-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {errorMessage}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full py-4 lg:py-5 bg-indigo-600 text-white rounded-xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all hover:shadow-2xl hover:shadow-indigo-500/20 active:scale-[0.98] disabled:bg-zinc-700 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        Sending...
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
