import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, MessageCircle, Lightbulb, Clock } from "lucide-react";

const technicalSkills = [
  { name: "JavaScript/TypeScript", level: 90 },
  { name: "React/Next.js", level: 85 },
  { name: "Node.js/Express", level: 80 },
  { name: "Database Design", level: 75 },
  { name: "AWS/Cloud Services", level: 70 }
];

const softSkills = [
  { name: "Team Leadership", icon: Users },
  { name: "Communication", icon: MessageCircle },
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Time Management", icon: Clock }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-neutral">
      <div className="container-width">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-text-secondary"
        >
          Skills
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-text-secondary">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-text">{skill.name}</span>
                    <span className="text-accent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="skill-progress"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-text-secondary">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-4 bg-white hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <skill.icon className="w-8 h-8 text-primary mb-2 mx-auto" />
                      <p className="font-semibold text-text">{skill.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
