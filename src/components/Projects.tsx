import React from 'react';
import { ExternalLink, Github, Database, Brain, Server, Bot } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "AI-Powered Code Review Assistant",
      description: "An intelligent code review tool that uses machine learning to analyze Python code quality, suggest improvements, and detect potential bugs. Built with FastAPI and transformer models.",
      tech: ["Python", "FastAPI", "Transformers", "PostgreSQL", "Docker"],
      icon: <Brain className="h-8 w-8 text-blue-400" />,
      features: [
        "Automated code quality analysis",
        "ML-based bug detection",
        "Performance optimization suggestions",
        "Integration with Git workflows"
      ],
      status: "Active Development"
    },
    {
      title: "Distributed Task Queue System",
      description: "A high-performance distributed task processing system built for handling millions of background jobs. Features auto-scaling, failure recovery, and real-time monitoring.",
      tech: ["Python", "Redis", "Kubernetes", "Prometheus", "Grafana"],
      icon: <Server className="h-8 w-8 text-green-400" />,
      features: [
        "Auto-scaling workers",
        "Failure recovery mechanisms",
        "Real-time monitoring dashboard",
        "Priority-based job scheduling"
      ],
      status: "Production Ready"
    },
    {
      title: "Smart Document Processing Pipeline",
      description: "An ML-powered document processing system that extracts, classifies, and analyzes documents using NLP techniques. Handles PDFs, images, and text files at scale.",
      tech: ["Python", "spaCy", "OpenCV", "AWS S3", "Lambda"],
      icon: <Database className="h-8 w-8 text-purple-400" />,
      features: [
        "Multi-format document processing",
        "OCR and text extraction",
        "Document classification",
        "Automated data validation"
      ],
      status: "Beta Testing"
    },
    {
      title: "Conversational AI Chatbot",
      description: "A sophisticated chatbot built with modern NLP techniques, capable of handling complex conversations and integrating with various business systems.",
      tech: ["Python", "OpenAI API", "LangChain", "MongoDB", "React"],
      icon: <Bot className="h-8 w-8 text-yellow-400" />,
      features: [
        "Natural language understanding",
        "Context-aware responses",
        "Multi-language support",
        "Integration with CRM systems"
      ],
      status: "MVP Complete"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production Ready":
        return "text-green-400 border-green-400";
      case "Active Development":
        return "text-blue-400 border-blue-400";
      case "Beta Testing":
        return "text-yellow-400 border-yellow-400";
      default:
        return "text-gray-400 border-gray-400";
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing innovative solutions that combine backend engineering with AI technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200 overflow-hidden group"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gray-700 rounded-lg">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs border ${getStatusColor(project.status)} mt-2`}>
                        {project.status}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                      <Github className="h-5 w-5 text-gray-300 hover:text-white" />
                    </button>
                    <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                      <ExternalLink className="h-5 w-5 text-gray-300 hover:text-white" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-6">
                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 rounded-lg font-semibold text-white transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;