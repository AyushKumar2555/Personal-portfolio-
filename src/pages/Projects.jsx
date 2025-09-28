import ProjectCard from '../components/ProjectCard';
import { SparklesIcon } from '@heroicons/react/24/outline';

const Projects = () => {
const projects = [
  {
    id: 1,
    title: "Earthquake Visualizer",
    description: "Visualizes real-time earthquake data on interactive maps. Users can filter by magnitude and date, and see detailed information about each event.",
    technologies: ["React.js", "Leaflet.js", "REST API", "Tailwind CSS", "Chart.js"],
    liveUrl: "https://earthquake-visualizer-tau.vercel.app/",
    githubUrl: "https://github.com/AyushKumar2555/Earthquake-visualizer",
    previewImage:"/preview/earthquake-visualizer.png"
  },
  {
    id: 2,
    title: "Gemini AI",
    description: "AI-powered chat application that highlights code snippets and provides smart suggestions for developers in real-time.",
    technologies: ["React.js", "Tailwind CSS", "Gemini API", "Node.js", "Vite"],
    liveUrl: "https://gemini-ai-ten-mu.vercel.app/",
    githubUrl: "https://github.com/AyushKumar2555/Gemini-AI",
    previewImage: "/preview/gemini-ai.png"
  },
 
  {
    id: 3,
    title: "ChatGennie",
    description: "A real-time chat application with clean UI, online/offline status, and group chat functionality. Built for smooth, fast communication.",
    technologies: ["React.js", "Tailwind CSS", "Vite"],
    liveUrl: "https://chat-genie-tan.vercel.app/",
    githubUrl: "https://github.com/AyushKumar2555/ChatGenie",
    previewImage: "/preview/smart-chat-app.png"
  },
  {
    id: 5,
    title: "Product Management System",
    description: "A Java Full-Stack web application built with JSP, Servlets, Hibernate, and MySQL. Features include product CRUD operations, inventory management, and user authentication.",
    technologies: ["Java", "JSP", "Servlets", "Hibernate", "MySQL", "Bootstrap"],
    liveUrl: "#", 
    githubUrl: "https://github.com/AyushKumar2555/ProductManagementJSP",
    previewImage: "/previews/product-management.png"
  },
  {
    id: 6,
    title: "Currency Converter",
    description: "Real-time currency conversion app with API integration. Features custom hooks for fetching and managing exchange rates, reusable input components, and a clean, responsive UI.",
    technologies: ["React.js", "Tailwind CSS", "REST API", "Custom Hooks", "Vite"],
    liveUrl: "https://currency-converter-react-lyart.vercel.app/",
    githubUrl: "https://github.com/AyushKumar2555/currency-converter-React",
    previewImage: "/preview/currency-converter.png"
  }
];



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
            A curated selection of projects that showcase my skills in web development, 
            design, and problem-solving. Each project represents a unique challenge and solution.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to start your project?</h3>
            <p className="text-gray-300 mb-6">Let's work together to bring your ideas to life</p>
            <a
              href="#contact"
              className="group inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25"
            >
              Start a Conversation
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
