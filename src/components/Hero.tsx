import React from 'react';
import { Download, Mail, Phone, MapPin, Linkedin, Calendar, Clock } from 'lucide-react';

const Hero = ({ darkMode }) => {
  const achievements = [
    { number: '₦800M+', label: 'Projects Managed' },
    { number: '30%', label: 'Cost Savings Achieved' },
    { number: '20+', label: 'Major Projects Delivered' },
    { number: '5+', label: 'Years Experience' }
  ];

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-slate-50 via-white to-slate-100'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                darkMode 
                  ? 'bg-orange-900/30 text-orange-300 border border-orange-700/50' 
                  : 'bg-orange-100 text-orange-700 border border-orange-200'
              }`}>
                Professional Quantity Surveyor
              </span>
            </div>

            <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              AbdulAzeez
              <span className="block text-orange-500">Ahmad</span>
            </h1>

            <p className={`text-xl mb-8 leading-relaxed max-w-2xl ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Results-driven Quantity Surveyor with proven expertise in cost estimation, 
              budgeting, and project management across high-value infrastructure projects. 
              Passionate about delivering value through smart cost control and efficient resource management.
            </p>

            {/* Contact Info */}
            <div className={`flex flex-wrap gap-4 mb-8 justify-center lg:justify-start ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-orange-500" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-orange-500" />
                <span>+234 901 196 7239</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-orange-500" />
                <span>ahmadabdulazeez122@gmail.com</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="#contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Mail size={20} />
                <span>Get In Touch</span>
              </a>
              <a
                href="https://linkedin.com/in/ahmad-abdulazeez-530a311a5"
                target="_blank"
                rel="noopener noreferrer"
                className={`border-2 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 ${
                  darkMode 
                    ? 'border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500' 
                    : 'border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400'
                }`}
              >
                <Linkedin size={20} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image & Stats */}
          <div className="text-center">
            <div className="relative inline-block mb-8">
              <div className="relative">
                <img
                  src="/WhatsApp Image 2025-08-11 at 18.06.07_dc05d73d.jpg"
                  alt="AbdulAzeez Ahmad"
                  className="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-white"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
              </div>
              <div className={`absolute -top-4 -left-4 w-16 h-16 rounded-full border-4 opacity-20 animate-pulse ${
                darkMode ? 'border-orange-400' : 'border-orange-500'
              }`}></div>
              <div className={`absolute -bottom-4 -right-4 w-12 h-12 rounded-full border-4 opacity-30 animate-pulse ${
                darkMode ? 'border-orange-400' : 'border-orange-500'
              }`} style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((stat, index) => (
                <div key={index} className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  darkMode 
                    ? 'bg-slate-800 border-slate-700' 
                    : 'bg-white border-slate-200'
                }`}>
                  <div className={`text-2xl font-bold mb-2 ${
                    darkMode ? 'text-orange-400' : 'text-orange-600'
                  }`}>
                    {stat.number}
                  </div>
                  <div className={`text-sm ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
          darkMode ? 'border-slate-600' : 'border-slate-400'
        }`}>
          <div className={`w-1 h-3 rounded-full mt-2 animate-pulse ${
            darkMode ? 'bg-slate-600' : 'bg-slate-400'
          }`}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;