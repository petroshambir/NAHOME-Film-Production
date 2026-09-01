
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import img_bg from "../assets/images/nahom-logo.jpeg"

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // ኣብዚ ናብ ሰርቨርካ ዝለኣኽ ሎጂክ ክትውስኽ ትኽእል ኢኻ
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-[#ff6600]/30 selection:text-[#ff6600] overflow-x-hidden flex flex-col justify-between">
      
      {/* 1. Hero Section ምስ ናቭጌሽንን ድሕረ ባይታ ስእልን */}
      <div className="relative w-full h-[65vh] md:h-[75vh] flex flex-col justify-between">
        
        {/* Navbar ኣብ ልዕሊቲ ስእሊ ብ Absolute ተቐሚጡ ኣሎ */}
        <div className="absolute top-0 left-0 w-full z-20">
          <Navbar />
        </div>

        {/* Hero Background Image & Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={img_bg}
            alt="Habesha Film Production Contact" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-black/60"></div>
        </div>

        {/* Hero Content & Habesha Pictures H2 */}
        <div className="relative z-10 mt-auto text-center px-4 pb-12 max-w-4xl mx-auto">
          <span className="text-[10px] md:text-xs uppercase font-bold tracking-[0.4em] text-[#ff6600] block mb-3">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4 text-zinc-100 drop-shadow-lg">
            Contact Us
          </h1>
          <div className="w-16 h-[2px] bg-[#ff6600] mx-auto mb-4"></div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#ff6600] tracking-wider font-light drop-shadow">
            NAHOME FILIM PRODUCTION
          </h2>
        </div>
      </div>

      {/* 2. Main Contact Info & Form Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-[#ff6600] block mb-2">
            Reach Out To Us
          </span>
          <h3 className="text-3xl md:text-4xl font-serif text-zinc-100">ርኸቡና</h3>
          <div className="w-12 h-[1px] bg-[#ff6600]/40 mx-auto mt-3"></div>
          <p className="text-zinc-400 text-sm md:text-base mt-4 font-light max-w-xl mx-auto">
            ዝኾነ ሕቶ፡ ሓሳብ ወይ ናይ ቀረጻ ሕቶ እንተለኩም ብቐጥታ ክትረኽቡና ትኽእሉ። ብሓጎስ ክንቅበለኩም ኢና።
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Contact Information Cards */}
          <div className="space-y-6">
            
            {/* Address */}
            <div className="bg-zinc-950 border border-[#ff6600]/20 p-6 rounded-2xl shadow-xl flex items-start gap-4">
              <div className="w-12 h-12 bg-[#ff6600]/10 border border-[#ff6600]/30 rounded-xl flex items-center justify-center text-[#ff6600] text-xl shrink-0">
                📍
              </div>
              <div>
                <h4 className="text-lg font-serif font-bold text-zinc-100">ኣድራሻና (Address)</h4>
                <p className="text-zinc-400 text-sm mt-1 font-light">ኣዲስ ኣበባ፣ ለቡ መብራት</p>
                <p className="text-zinc-500 text-xs mt-0.5">Addis Ababa, Lebu Mebraten</p>
              </div>
            </div>

            {/* Phone Number */}
            <div className="bg-zinc-950 border border-[#ff6600]/20 p-6 rounded-2xl shadow-xl flex items-start gap-4">
              <div className="w-12 h-12 bg-[#ff6600]/10 border border-[#ff6600]/30 rounded-xl flex items-center justify-center text-[#ff6600] text-xl shrink-0">
                📞
              </div>
              <div>
                <h4 className="text-lg font-serif font-bold text-zinc-100">ፎን ናምበር (Phone)</h4>
                <a href="tel:+251976130175" className="text-zinc-400 text-sm mt-1 font-light hover:text-[#ff6600] transition-colors underline underline-offset-4">
                  +251 976130175
                </a>
                <br />
                
                <a href="tel:+251942746150" className="text-zinc-400 text-sm mt-1 font-light hover:text-[#ff6600] transition-colors underline underline-offset-4">
                  +251 942746150
                </a>
                <p className="text-zinc-500 text-xs mt-0.5">ካብ ሰዓት ስራሕ ወጻኢ ብመልእኽቲ ክትረኽቡና ትኽእሉ</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-zinc-950 border border-[#ff6600]/20 p-6 rounded-2xl shadow-xl flex items-start gap-4">
              <div className="w-12 h-12 bg-[#ff6600]/10 border border-[#ff6600]/30 rounded-xl flex items-center justify-center text-[#ff6600] text-xl shrink-0">
                ✉️
              </div>
              <div>
                <h4 className="text-lg font-serif font-bold text-zinc-100">ኢመይል (Email)</h4>
                <a 
                  href="mailto:Adalhambir946@gmail.com" 
                  className="block text-zinc-400 text-sm mt-1 font-light hover:text-[#ff6600] transition-colors underline underline-offset-4"
                >
                  Adalhambir946@gmail.com
                </a>
                <p className="text-zinc-500 text-xs mt-0.5">ብቐጥታ ኢመይል ንምጽሓፍ ኣብ ልዕሊኡ ጠውቑ</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-zinc-950 border border-[#ff6600]/20 p-6 rounded-2xl shadow-xl flex items-start gap-4">
              <div className="w-12 h-12 bg-[#ff6600]/10 border border-[#ff6600]/30 rounded-xl flex items-center justify-center text-[#ff6600] text-xl shrink-0">
                ⏰
              </div>
              <div>
                <h4 className="text-lg font-serif font-bold text-zinc-100">ናይ ስራሕ ሰዓታት (Working Hours)</h4>
                <p className="text-zinc-400 text-sm mt-1 font-light">ሰኑይ - ዓርቢ: 8:00 ንጉሆ - 6:00 ምሸት</p>
                <p className="text-zinc-400 text-sm font-light">ቀዳም: 9:00 ንጉሆ - 8:00 ምሸት</p>
                <p className="text-zinc-500 text-xs mt-0.5">ሰንበት ዕጹው እዩ</p>
              </div>
            </div>

          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-zinc-950 border border-[#ff6600]/30 p-8 md:p-10 rounded-2xl shadow-2xl">
            <h4 className="text-2xl font-serif font-bold text-zinc-100 mb-2">መልእኽቲ ሰድዱልና</h4>
            <p className="text-zinc-400 text-xs md:text-sm font-light mb-6">
              ሕቶኹም ወይ ርኢቶኹም ኣብ ታሕቲ ብምጽሓፍ ሰንድ (Send) ጥዉቑ። ብቕልጡፍ ክንምለሰልኩም ኢና።
            </p>

            {submitted ? (
              <div className="bg-[#ff6600]/10 border border-[#ff6600]/40 p-6 rounded-xl text-center">
                <span className="text-3xl block mb-2 text-[#ff6600]">✓</span>
                <h5 className="text-lg font-serif font-bold text-[#ff6600] mb-1">መልእኽትኹም ብዕወት ተሰዲዱ ኣሎ!</h5>
                <p className="text-xs text-zinc-400 font-light">ቀልጢፍና ክንምለሰልኩም ኢና። ብዝሓለፈ ንዝገበርኩምዎ ርክብ ነመስግን።</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-[#ff6600] text-white px-4 py-2 text-xs uppercase font-bold tracking-widest rounded-xl hover:bg-[#e05a00] transition-all shadow-lg"
                >
                  ልኣኽ ካልእ መልእኽቲ
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2">ሽምኩም (Full Name)</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full bg-zinc-900 border border-[#ff6600]/50 focus:border-[#ff6600] p-3 rounded-xl text-zinc-100 text-sm focus:outline-none transition-colors shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2">ኢመይል (Email Address)</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-zinc-900 border border-[#ff6600]/50 focus:border-[#ff6600] p-3 rounded-xl text-zinc-100 text-sm focus:outline-none transition-colors shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2">መልእኽቲ (Message)</label>
                  <textarea 
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                    className="w-full bg-zinc-900 border border-[#ff6600]/50 focus:border-[#ff6600] p-3 rounded-xl text-zinc-100 text-sm focus:outline-none transition-colors resize-none shadow-inner"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#ff6600] text-white py-3.5 rounded-xl text-xs uppercase font-bold tracking-[0.2em] hover:bg-[#e05a00] transition-all shadow-lg disabled:opacity-50"
                >
                  {submitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 3. Google Map Embed Location Section */}
      <section className="w-full h-96 px-4 max-w-7xl mx-auto mb-20">
        <div className="w-full h-full rounded-2xl overflow-hidden border border-[#ff6600]/20 shadow-2xl relative">
          <iframe 
            title="Habesha Pictures Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.751765275537!2d38.7420!3d8.9806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOGKwNTgnMjQuMiJOIDM4wrA0NCczMS4yIkU!5e0!3m2!1sen!2set!4v1650000000000!5m2!1sen!2set" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
}