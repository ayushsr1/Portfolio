import React, { useState, useEffect } from 'react';
import { Shield, Code, Cloud, Lock, Terminal, Mail, Github, Linkedin, Menu, X, ChevronRight, Database, Server, FileCode, Award, TrendingUp, Clock, AlertTriangle } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [terminalText, setTerminalText] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  const fullText = '> ayush@cybersec:~$ whoami\nNetwork & Cloud Security Engineer\n> Securing hybrid cloud environments...\n> 3.8+ years experience ✓\n> AWS | Azure | Python | SIEM ✓';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTerminalText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const experiences = [
    {
      title: 'Backend Developer',
      company: 'QueueBuster',
      project: 'WonderLa Amusement Park',
      period: 'April 2025 - June 2025',
      location: 'Noida, UP',
      highlights: [
        'Engineered SIEM log correlation framework aggregating 15+ data sources',
        'Reduced investigation time from 4 hrs to 45 mins',
        'Established AWS security baseline for retail payment processing',
        'Configured VPC isolation, security group micro-segmentation'
      ],
      icon: Shield
    },
    {
      title: 'Solutions Engineer',
      company: 'Gammastack',
      project: 'Money Factory, Nio Play',
      period: 'August 2024 - February 2025',
      location: 'Remote',
      highlights: [
        'Conducted threat modeling and security risk assessments',
        'Led security incident response investigations (35+ critical alerts)',
        'Achieved 40% reduction in MTTR through SIEM analysis',
        'Reviewed VPC configurations to limit lateral movement'
      ],
      icon: AlertTriangle
    },
    {
      title: 'Sr. Software Engineer',
      company: 'SaxonAi',
      project: 'Kloud Onn, Baymark',
      period: 'October 2022 - July 2024',
      location: 'Hyderabad',
      highlights: [
        'Implemented secure logging practices preventing PII exposure',
        'Performed security-focused code reviews for microservices',
        'Hardened Docker containers per CIS benchmarks',
        'Integrated automated security checks into CI/CD pipelines'
      ],
      icon: Code
    },
    {
      title: 'Cloud Engineer',
      company: 'Hanu Software Solutions',
      project: 'Ensemble Health Partners',
      period: 'September 2021 - October 2022',
      location: 'Noida, UP',
      highlights: [
        'Designed least-privilege IAM policies for AWS services',
        'Managed SSL/TLS certificates using AWS ACM',
        'Enforced HTTPS-only traffic on ALB and CloudFront',
        'Developed Python scripts for security event monitoring'
      ],
      icon: Cloud
    }
  ];

  const skills = {
    'Security Tools': ['Metasploit', 'Nmap', 'Docker-Bench', 'Trivy', 'AWS IAM', 'CloudTrail', 'Azure Security Center', 'SIEM'],
    'Cloud & Network': ['AWS', 'Azure', 'VPC Design', 'Firewall Management', 'Network Segmentation', 'TLS/HTTPS'],
    'Development': ['Python3', 'JavaScript ES6+', 'Node.js', 'REST API', 'GraphQL', 'Socket.io'],
    'Compliance': ['PCI-DSS', 'SOC 2', 'CIS Benchmarks', 'Security Monitoring']
  };

  const stats = [
    { label: 'Years Experience', value: '3.8+', icon: TrendingUp },
    { label: 'MTTR Reduction', value: '40%', icon: Clock },
    { label: 'Critical Alerts', value: '35+', icon: AlertTriangle },
    { label: 'Data Sources', value: '15+', icon: Database }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'} backdrop-blur-sm border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className={`w-8 h-8 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
              <span className="font-bold text-xl">Ayush Srivastava</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'Experience', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`hover:${darkMode ? 'text-cyan-400' : 'text-cyan-600'} transition-colors`}
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden"
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="px-4 py-4 space-y-3">
              {['Home', 'Experience', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block hover:text-cyan-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${darkMode ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-cyan-100 text-cyan-700 border border-cyan-300'}`}>
                  🔐 Cybersecurity Engineer
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Securing the
                <span className={`block ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  Cloud Future
                </span>
              </h1>
              <p className={`text-xl mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Network & Cloud Security Engineer with 3.8+ years of experience securing hybrid cloud environments across AWS and Azure.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${darkMode ? 'bg-cyan-500 hover:bg-cyan-600' : 'bg-cyan-600 hover:bg-cyan-700'} text-white flex items-center space-x-2`}
                >
                  <span>Get In Touch</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/ayushsr0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} flex items-center space-x-2`}
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Terminal Animation */}
            <div className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-300'} shadow-2xl`}>
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} px-4 py-2 flex items-center space-x-2`}>
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-sm">terminal</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <pre className={`${darkMode ? 'text-green-400' : 'text-green-600'} whitespace-pre-wrap`}>
                  {terminalText}
                  <span className="animate-pulse">▊</span>
                </pre>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} text-center transform hover:scale-105 transition-transform`}
                >
                  <Icon className={`w-8 h-8 mx-auto mb-2 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Professional <span className={darkMode ? 'text-cyan-400' : 'text-cyan-600'}>Experience</span>
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-lg ${darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'} hover:shadow-xl transition-all transform hover:-translate-y-1`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${darkMode ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-100 text-cyan-600'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <p className={`${darkMode ? 'text-cyan-400' : 'text-cyan-600'} font-semibold`}>{exp.company}</p>
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.project}</p>
                        </div>
                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} text-right`}>
                          <p>{exp.period}</p>
                          <p>{exp.location}</p>
                        </div>
                      </div>
                      <ul className="space-y-2 mt-4">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <ChevronRight className={`w-4 h-4 mt-1 flex-shrink-0 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                            <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Technical <span className={darkMode ? 'text-cyan-400' : 'text-cyan-600'}>Arsenal</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}
              >
                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} hover:scale-105 transition-transform cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's <span className={darkMode ? 'text-cyan-400' : 'text-cyan-600'}>Connect</span>
          </h2>
          <p className={`text-xl mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Open to opportunities in cloud security, network security, and DevSecOps roles.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="mailto:ayushsr0@gmail.com"
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${darkMode ? 'bg-cyan-500 hover:bg-cyan-600' : 'bg-cyan-600 hover:bg-cyan-700'} text-white flex items-center space-x-2`}
            >
              <Mail className="w-5 h-5" />
              <span>ayushsr0@gmail.com</span>
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/ayushsr0"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-200'} transition-colors`}
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/ayushsr0"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-200'} transition-colors`}
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <div className={`mt-12 pt-8 border-t ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              📍 Based in Gurugram, Haryana | 📞 +91-9889766428
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-200'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © 2025 Ayush Srivastava. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}