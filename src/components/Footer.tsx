import React from 'react';
import { Mail, Phone, Linkedin, ArrowUp } from 'lucide-react';

const Footer = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-white' : 'bg-slate-900 text-white'
    }`}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">AbdulAzeez Ahmad</h3>
            <p className={`leading-relaxed mb-6 ${
              darkMode ? 'text-slate-400' : 'text-slate-300'
            }`}>
              Professional Quantity Surveyor specializing in cost management, 
              project delivery, and construction consultancy across major infrastructure projects.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:ahmadabdulazeez122@gmail.com"
                className={`p-3 rounded-lg transition-colors ${
                  darkMode 
                    ? 'bg-slate-900 hover:bg-orange-600' 
                    : 'bg-slate-800 hover:bg-orange-600'
                }`}
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+2349011967239"
                className={`p-3 rounded-lg transition-colors ${
                  darkMode 
                    ? 'bg-slate-900 hover:bg-orange-600' 
                    : 'bg-slate-800 hover:bg-orange-600'
                }`}
              >
                <Phone size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/ahmad-abdulazeez-530a311a5"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg transition-colors ${
                  darkMode 
                    ? 'bg-slate-900 hover:bg-orange-600' 
                    : 'bg-slate-800 hover:bg-orange-600'
                }`}
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Professional Services</h4>
            <ul className={`space-y-2 ${
              darkMode ? 'text-slate-400' : 'text-slate-300'
            }`}>
              <li>Cost Estimation & Planning</li>
              <li>Project Management</li>
              <li>Contract Administration</li>
              <li>Value Engineering</li>
              <li>Construction Supervision</li>
              <li>Material Management</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className={`space-y-2 ${
              darkMode ? 'text-slate-400' : 'text-slate-300'
            }`}>
              <li>
                <a href="#home" className="hover:text-orange-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-orange-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-orange-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-orange-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={`border-t pt-8 flex flex-col md:flex-row items-center justify-between ${
          darkMode ? 'border-slate-700' : 'border-slate-800'
        }`}>
          <p className={`text-center md:text-left ${
            darkMode ? 'text-slate-500' : 'text-slate-400'
          }`}>
            © {currentYear} AbdulAzeez Ahmad. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-orange-500 hover:bg-orange-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;