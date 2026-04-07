"use client"

import { Briefcase, Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "Systems Architect & AI Pathbreaker",
    type: "High-Octane Open Source Contributor",
    company: "gprMax & Keploy",
    location: "Indore, Madhya Pradesh, India",
    period: "Ongoing",
    duration: "Active",
    description: [
      "Architecting the future of Open Source at gprMax and Keploy with deep expertise in Physics-CI/CD intersection",
      "Neutralized 70+ performance bottlenecks in computational physics simulations, earning status as one of most active contributors in ecosystem",
      "Engineered resilient automated testing frameworks and enterprise-grade testing infrastructure for Agentic AI systems",
      "Optimizing HPC infrastructure and building systems that power the next generation of Agentic AI while operating at peak efficiency",
    ],
  },
  {
    title: "GSoC '26 Contributor",
    type: "Infrastructure & DevOps Engineer",
    company: "gprMax",
    location: "Indore, Madhya Pradesh, India",
    period: "February 2026 - Present",
    duration: "3 months",
    description: [
      "Engineered containerized CI/CD infrastructure (The Trident Pipeline) for gprMax",
      "Automated physics-based regression testing using GitHub Actions and Docker",
      "Implemented NRMSE validation for simulation accuracy",
      "Designed system for global scalability using Kubernetes (GKE/EKS)",
    ],
  },
  {
    title: "Open Source Developer",
    type: "Backend & Testing",
    company: "Keploy",
    location: "Indore, Madhya Pradesh, India",
    period: "January 2026 - April 2026",
    duration: "4 months",
    description: [
      "Architected resilient automated testing frameworks for complex microservices using Golang",
      "Enhanced API mocking and recording workflows to simplify backend testing",
      "Reduced system chaos by identifying and resolving architectural bottlenecks",
      "Integrated Keploy with modern cloud-native stacks for higher reliability",
    ],
  },
  {
    title: "Open Source Developer",
    type: "Full Stack Development",
    company: "GitHub Open Source",
    location: "Indore, Madhya Pradesh, India",
    period: "June 2025 - April 2026",
    duration: "11 months",
    description: [
      "Contributed to multiple open source projects and repositories",
      "Developed frontend and backend features for community projects",
      "Resolved 30+ critical production-level errors",
      "Mentored and collaborated with community developers",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-12 md:py-16 lg:py-20 bg-card/50 relative overflow-hidden">
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-secondary text-xs md:text-sm font-medium rounded-full text-foreground mb-3 md:mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Experience
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">My Journey</h2>
          <motion.div
            className="w-12 md:w-16 h-1 bg-primary mx-auto mt-3 md:mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-6 md:pl-8 pb-8 md:pb-12 last:pb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="absolute left-0 top-0 w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <motion.div
                  className="absolute inset-0 bg-primary rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>
              <div className="absolute left-[5px] md:left-[7px] top-4 w-0.5 h-full bg-border last:hidden" />

              <motion.div
                className="p-4 md:p-6 bg-card rounded-xl border border-border ml-3 md:ml-4 relative overflow-hidden group"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 mb-3 md:mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-primary text-sm md:text-base">{exp.type}</p>
                    </div>
                    <motion.span
                      className="self-start px-2 md:px-3 py-0.5 md:py-1 bg-primary/10 text-primary text-xs md:text-sm rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      {exp.duration}
                    </motion.span>
                  </div>

                  <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3 h-3 md:w-4 md:h-4" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 md:space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + itemIndex * 0.1 }}
                      >
                        <motion.span
                          className="w-1 h-1 md:w-1.5 md:h-1.5 bg-primary rounded-full mt-1.5 md:mt-2 shrink-0"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + itemIndex * 0.1 }}
                        />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
