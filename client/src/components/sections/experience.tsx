import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    period: "2022 - Present",
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    description: "Lead development of enterprise web applications using React, Node.js, and AWS. Managed a team of 4 developers and collaborated with cross-functional teams.",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL"]
  },
  {
    period: "2020 - 2022",
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    description: "Developed responsive web applications and e-commerce platforms. Collaborated with designers to implement pixel-perfect UI designs.",
    technologies: ["React", "Vue.js", "Tailwind CSS", "Figma"]
  },
  {
    period: "2018 - 2020",
    title: "Junior Web Developer",
    company: "StartupHub Inc.",
    description: "Built and maintained company websites using HTML, CSS, and JavaScript. Learned modern frameworks and best practices for web development.",
    technologies: ["HTML5", "CSS3", "JavaScript", "WordPress"]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-neutral">
      <div className="container-width">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-text-secondary"
        >
          Experience
        </motion.h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="md:w-1/4 flex-shrink-0">
                <div className="text-accent font-semibold">{exp.period}</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2 text-text-secondary">{exp.title}</h3>
                <p className="text-primary font-semibold mb-4">{exp.company}</p>
                <p className="text-text/80 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
