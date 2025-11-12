import { CodeBracketIcon, CpuChipIcon, CommandLineIcon,RocketLaunchIcon } from '@heroicons/react/24/outline';
import { BriefcaseIcon, StarIcon, CodeBracketSquareIcon } from '@heroicons/react/24/outline';
const About = () => {
const skills = [
  {
    icon: <CodeBracketIcon className="h-6 w-6" />,
    category: "Frontend",
    technologies: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Next.js",
      "Vue.js",
      "Responsive Design",
      "Redux / Context API"
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <CpuChipIcon className="h-6 w-6" />,
    category: "Backend / Full-Stack",
    technologies: [
      "Java",
      "Spring",
      "Spring Boot",
      "Hibernate",
      "JPA",
      "REST APIs",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL / PostgreSQL",
      "JWT Authentication",
      "MERN Stack",
      "Microservices",
      "Docker"
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <CommandLineIcon className="h-6 w-6" />,
    category: "Tools & Others",
    technologies: [
      "Git",
      "GitHub",
      "VSCode",
      "IntelliJ IDEA",
      "Figma",
      "Postman",
      "Docker",
      "AWS / Cloud",
      "Linux Command Line",
      "Jira / Agile"
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <RocketLaunchIcon className="h-6 w-6" />,
    category: "Learning / Emerging",
    technologies: [
      "GraphQL",
      "TypeScript Advanced",
      "Next.js Full-Stack",
      "Spring Security",
      "React Native",
      "AI/ML Integration",
      "Serverless Architecture",
      "WebSockets"
    ],
    color: "from-yellow-400 to-orange-400",
  }
];


const stats = [
  { number: "8+", label: "Projects Completed", icon: <RocketLaunchIcon className="h-6 w-6 text-primary-500 mx-auto mb-2" /> },
  { number: "Fresher", label: "Actively Learning", icon: <BriefcaseIcon className="h-6 w-6 text-primary-500 mx-auto mb-2" /> },
  { number: "100%", label: "Dedication & Commitment", icon: <StarIcon className="h-6 w-6 text-primary-500 mx-auto mb-2" /> },
  { number: "Java & React", label: "Full-Stack Focus", icon: <CodeBracketSquareIcon className="h-6 w-6 text-primary-500 mx-auto mb-2" /> },
];


  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-primary-600 text-sm font-medium">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">Real-World Applications</span>
          </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
  Hi! I'm Ayush Kumar, a passionate Frontend Developer and Java Full-Stack learner.  
  I focus on building responsive, scalable, and user-friendly web applications using modern technologies.  
  My projects include <strong>Earthquake Visualizer</strong>, <strong>Gemini AI</strong>, <strong>NoteNest</strong>,  
  and Java-based projects like <strong>Product Management System</strong> (JSP + Hibernate) and <strong>Library Management System</strong>.
</p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Section */}
     <div className="space-y-6">
  <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
  <div className="space-y-4 text-gray-600 leading-relaxed">
    <p>
      I began my development journey with curiosity and a passion for building impactful applications.  
      Over time, I have worked on projects ranging from modern React front-end applications to Java Full-Stack systems using JSP, Hibernate, and Spring Boot.
    </p>
    <p>
      I enjoy learning new technologies, writing clean and maintainable code, and creating solutions that solve real-world problems.  
      My projects, including <strong>Earthquake Visualizer</strong>, <strong>Gemini AI</strong>, <strong>NoteNest</strong>, and a <strong>Product Management System</strong>, reflect my dedication to continuous learning and skill development.
    </p>
    <p>
      When not coding, I explore frameworks, contribute to open-source, read tech blogs, and experiment with new tools to stay ahead in the rapidly evolving world of web development.
    </p>
  </div>
</div>


          {/* Skills Grid */}
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} mr-4`}>
                    <div className="text-white">{skill.icon}</div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{skill.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-2 bg-gray-50 text-gray-700 text-sm font-medium rounded-lg border border-gray-200 group-hover:border-gray-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="group text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
