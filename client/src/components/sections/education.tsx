import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "University of Technology",
    period: "2014 - 2018",
    description: "Focused on software engineering principles, data structures, and algorithms. Graduated with honors and completed a capstone project on web application security."
  },
  {
    degree: "Full Stack Web Development",
    institution: "CodeBootcamp Academy",
    period: "2018",
    description: "Intensive 12-week program covering modern web development technologies including React, Node.js, databases, and deployment strategies."
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="section-padding bg-white">
      <div className="container-width">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-text-secondary"
        >
          Education
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-2 text-text-secondary">{edu.degree}</h3>
                  <p className="text-primary font-semibold mb-2">{edu.institution}</p>
                  <p className="text-accent mb-4">{edu.period}</p>
                  <p className="text-text/80">{edu.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
