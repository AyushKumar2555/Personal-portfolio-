import ProjectCard from '../components/ProjectCard';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

const projects = [
  {
    id: 1,
    title: "Real-time Chat Application",
    description: "Full-stack real-time messaging platform with WebSocket integration, user authentication, and group chat functionality. Features include online status, message persistence, and real-time notifications.",
    technologies: ["Java Spring Boot", "WebSocket", "SQL", "ThymLeaf", "STOMP.js","SockJs","BootStrap"],
    liveUrl: "#",
    githubUrl: "https://github.com/AyushKumar2555/Real-Time-Chat-Application-Java-Full-Stack-Project",
    previewImage: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&auto=format&fit=crop",
    category: "fullstack",
    featured: true
  },
  {
    id: 2,
    title: "Quiz Management System",
    description: "Comprehensive quiz platform with admin panel, user management, and real-time scoring. Supports multiple question types, timed quizzes, and detailed analytics dashboard.",
    technologies: ["Java", "Spring Boot", "React.js", "MySQL", "REST API", "JPA"],
    liveUrl: "#",
    githubUrl: "https://github.com/AyushKumar2555/quiz-app-springboot-react",
    previewImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop",
    category: "fullstack",
    featured: true
  },
  {
    id: 3,
    title: "Online Banking System",
    description: "Secure web banking application built with Spring MVC featuring fund transfers, transaction history, account management, and admin dashboard. Implements role-based authentication and secure session management.",
    technologies: ["Java Spring MVC", "Thymeleaf", "Spring Security", "MySQL", "Hibernate", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "https://github.com/AyushKumar2555/online-banking-mvc",
    previewImage: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?w=600&auto=format&fit=crop",
    category: "fullstack",
    featured: true
  },
  {
    id: 4,
    title: "Book Management REST API",
    description: "RESTful API for library management system with complete CRUD operations, book search, filtering, pagination, and JWT authentication. Includes comprehensive API documentation and unit tests.",
    technologies: ["Java Spring Boot", "Spring Security", "JWT", "MySQL", "Spring Data JPA", "Swagger"],
    liveUrl: "#",
    githubUrl: "https://github.com/AyushKumar2555/Book_Management-Apis",
    previewImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&auto=format&fit=crop", // Books/library theme
    category: "backend",
    featured: false
  },
  {
    id: 5,
    title: "Product Management System",
    description: "Full-stack web application with complete CRUD operations, inventory management, and user authentication. Features responsive design and secure data handling.",
    technologies: ["Java", "JSP", "Servlets", "Hibernate", "MySQL", "Bootstrap"],
    liveUrl: "#", 
    githubUrl: "https://github.com/AyushKumar2555/ProductManagementJSP",
    previewImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop",
    category: "fullstack",
    featured: false
  },
  {
    id: 6,
    title: "Earthquake Visualizer",
    description: "Visualizes real-time earthquake data on interactive maps. Users can filter by magnitude and date, and see detailed information about each event.",
    technologies: ["React.js", "Leaflet.js", "REST API", "Tailwind CSS", "Chart.js"],
    liveUrl: "https://earthquake-visualizer-tau.vercel.app/",
    githubUrl: "https://github.com/AyushKumar2555/Earthquake-visualizer",
    previewImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop",
    category: "frontend",
    featured: true
  },
  {
    id: 7,
    title: "Gemini AI",
    description: "AI-powered chat application that highlights code snippets and provides smart suggestions for developers in real-time.",
    technologies: ["React.js", "Tailwind CSS", "Gemini API", "Node.js", "Vite"],
    liveUrl: "https://gemini-ai-ten-mu.vercel.app/",
    githubUrl: "https://github.com/AyushKumar2555/Gemini-AI",
    previewImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop",
    category: "frontend",
    featured: false
  },
  {
    id: 8,
    title: "ChatGennie",
    description: "A real-time chat application with clean UI, online/offline status, and group chat functionality. Built for smooth, fast communication.",
    technologies: ["React.js", "Tailwind CSS", "Vite"],
    liveUrl: "https://chat-genie-tan.vercel.app/",
    githubUrl: "https://github.com/AyushKumar2555/ChatGenie",
    previewImage: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&auto=format&fit=crop",
    category: "frontend",
    featured: false
  },
  {
    id: 9,
    title: "Currency Converter",
    description: "Real-time currency conversion app with API integration. Features custom hooks for fetching and managing exchange rates, reusable input components, and clean responsive UI.",
    technologies: ["React.js", "Tailwind CSS", "REST API", "Custom Hooks", "Vite"],
    liveUrl: "https://currency-converter-react-lyart.vercel.app/",
    githubUrl: "https://github.com/AyushKumar2555/currency-converter-React",
    previewImage: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=600&auto=format&fit=crop",
    category: "frontend",
    featured: false
  }
];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'backend', label: 'Backend' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'featured', label: 'Featured' }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/20 border border-primary-500/30 mb-6">
            <SparklesIcon className="h-4 w-4 text-primary-400 mr-2" />
            <span className="text-primary-200 text-sm font-medium">My Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my full-stack development journey featuring Java Spring Boot, React.js, and modern web technologies. 
            Each project demonstrates problem-solving skills and technical expertise.
          </p>
        </div>

        {/* Featured Projects Highlight */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">🌟 Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProjects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-primary-400 mb-2">{projects.length}+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-primary-400 mb-2">
              {projects.filter(p => p.category === 'fullstack').length}
            </div>
            <div className="text-gray-300">Full Stack Apps</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-primary-400 mb-2">
              {projects.filter(p => p.category === 'backend').length}
            </div>
            <div className="text-gray-300">Backend Systems</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-primary-400 mb-2">
              {projects.filter(p => p.category === 'frontend').length}
            </div>
            <div className="text-gray-300">Frontend Projects</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in collaborating?</h3>
            <p className="text-gray-300 mb-6">
              I'm currently available for full-stack development opportunities and freelance projects. 
              Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25"
              >
                Start a Conversation
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="https://github.com/AyushKumar2555"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20"
              >
                View GitHub
                <svg className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;