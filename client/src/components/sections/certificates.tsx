import { motion } from "framer-motion";
import { Award, Tag, Trophy } from "lucide-react";

const certificates = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    icon: Award
  },
  {
    title: "Google Cloud Professional",
    issuer: "Google Cloud Platform",
    year: "2022",
    icon: Tag
  },
  {
    title: "React Developer Certification",
    issuer: "Meta (Facebook)",
    year: "2021",
    icon: Trophy
  }
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="section-padding bg-neutral">
      <div className="container-width">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-text-secondary"
        >
          Certificates & Achievements
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="certificate-card"
            >
              <cert.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-bold mb-2 text-text-secondary">{cert.title}</h3>
              <p className="text-text/70 mb-2">{cert.issuer}</p>
              <p className="text-accent text-sm">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
