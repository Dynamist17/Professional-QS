import React, { useEffect, useState } from 'react';
import { ChevronDown, MapPin, Mail, Phone, Linkedin } from 'lucide-react';

const Hero = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { value: '30%', label: 'Cost Savings Achieved' },
    { value: '₦25M+', label: 'Saved Through Optimization' },
    { value: '20+', label: 'Major Projects Delivered' },
    { value: '5+', label: 'Years Experience' },
  ];

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white' 
        : 'bg-gradient-to-br from-slate-100 via-white to-slate-50 text-slate-900'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${darkMode ? 'ffffff' : '000000'}' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-16 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {/* Profile Image */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <div className="relative">
                <img
                  src="/WhatsApp Image 2025-08-11 at 18.06.07_dc05d73d.jpg"
                  alt="AbdulAzeez Ahmad"
                  className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-orange-500 shadow-2xl transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center animate-pulse">
                  <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
                darkMode 
                  ? 'bg-orange-500/20 text-orange-300' 
                  : 'bg-orange-100 text-orange-700'
              }`}>
                Professional Quantity Surveyor
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                AbdulAzeez
                <span className="block text-orange-400">Ahmad</span>
              </h1>
              <p className={`text-xl mb-8 leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Results-driven Quantity Surveyor with proven expertise in cost estimation, 
                budgeting, and project management across high-value infrastructure projects 
                worth over ₦1 billion.
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <MapPin className="text-orange-400" size={20} />
                <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-orange-400" size={20} />
                <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>+234 901 196 7239</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-orange-400" size={20} />
                <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>ahmadabdulazeez122@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="text-orange-400" size={20} />
                <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>LinkedIn Profile</span>
              </div>
            </div>

            <button 
              onClick={scrollToNext}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
          </div>

          {/* Right Content - Stats */}
            {/* Live Time Display */}
            <div className={`mb-6 p-4 rounded-lg ${
              darkMode ? 'bg-slate-800/50' : 'bg-white/50'
            } backdrop-blur-sm`}>
              <div className="text-sm text-orange-400 mb-1">Current Time (Lagos, Nigeria)</div>
              <div className={`text-lg font-mono ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {currentTime.toLocaleString('en-NG', {
                  timeZone: 'Africa/Lagos',
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit'
                })}
              </div>
            </div>

          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className={`backdrop-blur-sm rounded-2xl p-8 border ${
              darkMode 
                ? 'bg-white/10 border-white/20' 
                : 'bg-white/80 border-slate-200'
            }`}>
              <h3 className="text-2xl font-bold mb-8 text-center">Key Achievements</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-orange-400 mb-2">
                      {stat.value}
                    </div>
                    <div className={`text-sm ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}>{stat.label}</div>
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:animate-pulse">
          <button onClick={scrollToNext} className={`transition-colors ${
            darkMode 
              ? 'text-white/70 hover:text-white' 
                    <div className={`text-sm transition-colors group-hover:text-orange-400 ${
          }`}>
            <div className={`backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;