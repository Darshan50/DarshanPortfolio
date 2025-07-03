import React from 'react';
import { Code, Database, Brain, Cloud, TestTube, GitBranch } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 95, color: "from-blue-500 to-blue-600" },
        { name: "JavaScript", level: 85, color: "from-yellow-500 to-yellow-600" },
        { name: "SQL", level: 90, color: "from-green-500 to-green-600" },
        { name: "Go", level: 70, color: "from-cyan-500 to-cyan-600" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <TestTube className="h-6 w-6" />,
      skills: [
        { name: "Django/FastAPI", level: 92, color: "from-green-500 to-green-600" },
        { name: "TensorFlow", level: 80, color: "from-orange-500 to-orange-600" },
        { name: "PyTorch", level: 75, color: "from-red-500 to-red-600" },
        { name: "Scikit-learn", level: 85, color: "from-blue-500 to-blue-600" }
      ]
    },
    {
      title: "Databases & Data",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "PostgreSQL", level: 90, color: "from-blue-500 to-blue-600" },
        { name: "MongoDB", level: 85, color: "from-green-500 to-green-600" },
        { name: "Redis", level: 80, color: "from-red-500 to-red-600" },
        { name: "Elasticsearch", level: 75, color: "from-yellow-500 to-yellow-600" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: "Natural Language Processing", level: 85, color: "from-purple-500 to-purple-600" },
        { name: "Computer Vision", level: 80, color: "from-pink-500 to-pink-600" },
        { name: "Deep Learning", level: 78, color: "from-indigo-500 to-indigo-600" },
        { name: "MLOps", level: 70, color: "from-teal-500 to-teal-600" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: "AWS", level: 82, color: "from-orange-500 to-orange-600" },
        { name: "Docker", level: 88, color: "from-blue-500 to-blue-600" },
        { name: "Kubernetes", level: 75, color: "from-blue-500 to-blue-600" },
        { name: "CI/CD", level: 85, color: "from-green-500 to-green-600" }
      ]
    },
    {
      title: "Tools & Workflow",
      icon: <GitBranch className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 95, color: "from-gray-500 to-gray-600" },
        { name: "Linux", level: 90, color: "from-yellow-500 to-yellow-600" },
        { name: "Jupyter", level: 85, color: "from-orange-500 to-orange-600" },
        { name: "VS Code", level: 92, color: "from-blue-500 to-blue-600" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building scalable backend systems and AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all duration-200"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg text-white">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Certifications & Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "AWS Certified Developer",
              "TensorFlow Developer Certificate",
              "MongoDB Certified Developer",
              "Python Institute PCAP"
            ].map((cert, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 hover:border-gray-600 hover:bg-gray-800/70 transition-all duration-200"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;