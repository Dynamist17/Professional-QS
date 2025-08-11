import React, { useState } from 'react';
import { ExternalLink, MapPin, Calendar, DollarSign, Users, X } from 'lucide-react';

const Projects = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Lagos State Food Security Systems & Logistics Hub',
      client: 'Lagos State Government',
      location: 'Epe, Lagos State',
      year: '2024 - Present',
      value: '₦5+ Billion',
      image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Infrastructure',
      description: 'The largest food logistics hub in sub-Saharan Africa designed to strengthen food security for over 10 million Lagosians.',
      features: [
        '60,000+ sqm of cold and dry storage facilities',
        'Silos for bulk storage ensuring sustainable food reserves',
        'Truck terminals and filling station for optimized logistics',
        'Administrative buildings and accommodation units',
        'Heavy infrastructure road network for distribution'
      ],
      role: 'Project Quantity Surveyor',
      achievements: [
        'Overseeing cost management for Dealing Areas 1-6',
        'Achieved 20% cost savings across seven projects through material tracking',
        'Developed Material Tracker Dashboard for procurement optimization',
        'Delivered 5% budget savings through value engineering strategies'
      ]
    },
    {
      id: 2,
      title: 'Niger Gold Buying Centre (GBC)',
      client: 'SMDF-PAGMI LTD',
      location: 'Minna, Niger State',
      year: '2022 - Present',
      value: '₦800+ Million',
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Commercial',
      description: 'Comprehensive reconstruction of Gold Buying Centre with specialized facilities for gold processing, storage, and trade operations.',
      features: [
        'Server rooms and smelting facilities',
        'Secure storage facilities and transactional cubicles',
        'Water treatment plant and external storage tanks',
        'Generator systems for uninterrupted power',
        'Enhanced security systems and street lighting'
      ],
      role: 'Project Analyst',
      achievements: [
        'Led conceptualization and preliminary cost estimation',
        'Prepared comprehensive BOQ and tender documentation',
        'Managed tendering process and contractor evaluation',
        'Delivered monthly and quarterly progress reports'
      ]
    },
    {
      id: 3,
      title: 'Kaduna Gold Buying Centre',
      client: 'SMDF-PAGMI LTD',
      location: 'Kaduna, Kaduna State',
      year: '2022 - 2024',
      value: '₦500+ Million',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Commercial',
      description: 'Rehabilitation of two-story building with complete electrical and mechanical services installation.',
      features: [
        'Two-story building rehabilitation',
        'Complete MEP installations',
        'External pavement and landscaping',
        'Fence work and gatehouse construction',
        'Administrative and security systems'
      ],
      role: 'Project Analyst',
      achievements: [
        'Managed complete project lifecycle from inception to completion',
        'Ensured compliance with all contractual obligations',
        'Delivered project within budget and timeline',
        'Maintained high quality standards throughout construction'
      ]
    },
    {
      id: 4,
      title: 'Abuja-Kano Road MEP Installations',
      client: 'Federal Government of Nigeria',
      location: 'Abuja-Kano Corridor',
      year: '2021 - 2022',
      value: '₦300+ Million',
      image: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Infrastructure',
      description: 'MEP installations for multiple yard buildings supporting the construction of the Abuja-Kano road project.',
      features: [
        'MEP installations for Yards 265, 297, and 231',
        'Site office and administrative facilities',
        'Electrical and plumbing systems',
        'HVAC installations for operational efficiency'
      ],
      role: 'Assistant Quantity Surveyor',
      achievements: [
        'Achieved ₦25 million savings through cost optimization',
        'Conducted comprehensive site inspections and measurements',
        'Prepared accurate variation bills and cost analyses',
        'Ensured efficient project execution and stakeholder coordination'
      ]
    }
  ];

  const categories = ['All', 'Infrastructure', 'Commercial', 'Residential'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-slate-900' : 'bg-white'
      }`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>Featured Projects</h2>
            <p className={`text-xl max-w-3xl mx-auto mb-8 ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Showcasing major infrastructure and construction projects with proven results and exceptional value delivery
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-orange-500 text-white shadow-lg'
                      : darkMode 
                        ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' 
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`rounded-xl shadow-lg overflow-hidden border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
                  darkMode 
                    ? 'bg-slate-800 border-slate-700' 
                    : 'bg-white border-slate-100'
                }`}
                onClick={() => openModal(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 line-clamp-2 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-sm mb-4 line-clamp-2 ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className={`flex items-center text-sm ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      <MapPin size={14} className="mr-2" />
                      {project.location}
                    </div>
                    <div className={`flex items-center text-sm ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      <Calendar size={14} className="mr-2" />
                      {project.year}
                    </div>
                    <div className={`flex items-center text-sm ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      <DollarSign size={14} className="mr-2" />
                      {project.value}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-orange-600">
                      {project.role}
                    </span>
                    <ExternalLink size={16} className={
                      darkMode ? 'text-slate-500' : 'text-slate-400'
                    } />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className={`rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-slate-800' : 'bg-white'
          }`}>
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeModal}
                className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                  darkMode 
                    ? 'bg-slate-700/90 hover:bg-slate-700 text-white' 
                    : 'bg-white/90 hover:bg-white text-slate-900'
                }`}
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {selectedProject.category}
              </div>
            </div>

            <div className="p-8">
              <h3 className={`text-3xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {selectedProject.title}
              </h3>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-orange-500" size={16} />
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{selectedProject.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="text-orange-500" size={16} />
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{selectedProject.year}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="text-orange-500" size={16} />
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{selectedProject.value}</span>
                </div>
              </div>

              <p className={`mb-6 leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {selectedProject.description}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className={`text-lg font-bold mb-3 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>Project Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className={`text-sm ${
                          darkMode ? 'text-slate-300' : 'text-slate-600'
                        }`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className={`text-lg font-bold mb-3 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>Key Achievements</h4>
                  <ul className="space-y-2">
                    {selectedProject.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className={`text-sm ${
                          darkMode ? 'text-slate-300' : 'text-slate-600'
                        }`}>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`mt-8 p-4 rounded-lg ${
                darkMode ? 'bg-slate-700' : 'bg-slate-50'
              }`}>
                <div className="flex items-center space-x-2">
                  <Users className="text-orange-500" size={16} />
                  <span className={`font-medium ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>Role: {selectedProject.role}</span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <span className={`font-medium ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>Client: {selectedProject.client}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;