import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-width">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-text-secondary"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Modern office workspace with laptop and design tools" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg mb-6 text-text/80">
              I'm a passionate Full Stack Developer with over 5 years of experience building 
              scalable web applications. I specialize in React, Node.js, and modern JavaScript frameworks.
            </p>
            
            <p className="text-lg mb-8 text-text/80">
              My journey in tech started with a curiosity for how things work, and has evolved into 
              a career focused on creating meaningful digital experiences that solve real-world problems.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-4 bg-neutral">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-text/70">Projects Completed</div>
              </Card>
              <Card className="text-center p-4 bg-neutral">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-text/70">Years Experience</div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
