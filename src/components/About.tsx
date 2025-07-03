import React from 'react';
import { Server, Database, Brain, Code2 } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Server className="h-8 w-8 text-blue-400" />,
      title: "Backend Architecture",
      description: "Designing scalable, maintainable systems with Python frameworks"
    },
    {
      icon: <Database className="h-8 w-8 text-green-400" />,
      title: "Data Engineering",
      description: "Building robust data pipelines and ETL processes"
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-400" />,
      title: "AI & Machine Learning",
      description: "Exploring deep learning, NLP, and computer vision applications"
    },
    {
      icon: <Code2 className="h-8 w-8 text-yellow-400" />,
      title: "Clean Code",
      description: "Writing maintainable, testable code following best practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about building the future through code and artificial intelligence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm a backend-focused Python developer with a deep passion for creating robust, 
                scalable systems and exploring the cutting-edge world of artificial intelligence. 
                My journey in software development has been driven by curiosity and a desire to 
                solve complex problems through elegant code.
              </p>
              <p className="text-lg leading-relaxed">
                Currently diving deep into machine learning and AI technologies, I'm fascinated by 
                how these tools can transform industries and create innovative solutions. From 
                building efficient APIs to experimenting with neural networks, I enjoy the 
                intersection of practical engineering and theoretical AI concepts.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects, 
                reading research papers, or experimenting with the latest AI frameworks and tools.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200 hover:bg-gray-800/70"
              >
                <div className="flex-shrink-0 p-2 bg-gray-700 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;