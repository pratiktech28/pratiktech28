"use client"

import { Code2, Monitor, Server, Database, Brain, Wrench, CheckCircle2, Github } from "lucide-react"
import { motion } from "framer-motion"

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    description: "Core languages for development",
    skills: ["Python", "Golang", "C++", "JavaScript"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Monitor,
    title: "Infrastructure & DevOps",
    description: "Container orchestration and cloud platforms",
    skills: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Server,
    title: "Backend & Frameworks",
    description: "Server-side technologies and APIs",
    skills: ["Node.js", "Express.js", "REST APIs", "Microservices"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Database,
    title: "Database & Data Storage",
    description: "Database management and distributed storage",
    skills: ["MySQL", "MongoDB", "PV/PVC Storage", "Data Pipelines"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Brain,
    title: "AI & Computational Physics",
    description: "Machine Learning and Physics simulation",
    skills: ["Machine Learning", "Agentic AI", "Physics Simulation", "Data Analysis"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Wrench,
    title: "Tools & Testing",
    description: "Development and testing tools",
    skills: ["Git", "GitHub", "API Mocking", "Regression Testing"],
    color: "from-pink-500 to-rose-500",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function Skills() {
  return (
    <section id="skills" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-40 md:w-64 h-40 md:h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 md:w-64 h-40 md:h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

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
            whileTap={{ scale: 0.95 }}
          >
            My Skills
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Technical Expertise</h2>
          <motion.div
            className="w-12 md:w-16 h-1 bg-primary mx-auto mt-3 md:mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="group p-4 md:p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all relative overflow-hidden"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              style={{ perspective: 1000 }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <motion.div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

              <div className="relative z-10">
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <motion.div
                    className="p-2 md:p-3 bg-secondary rounded-lg group-hover:bg-primary/20 transition-colors shrink-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <category.icon className="w-5 h-5 md:w-6 md:h-6 text-foreground group-hover:text-primary transition-colors" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base text-foreground">{category.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-2 md:px-3 py-0.5 md:py-1 bg-secondary text-xs md:text-sm rounded-full text-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + skillIndex * 0.1 }}
                      whileHover={{ scale: 1.15, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-10 md:mb-12">
            <motion.span
              className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-secondary text-xs md:text-sm font-medium rounded-full text-foreground mb-3 md:mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GSoC'26 Initiative
            </motion.span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">GSoC'26 Proposal Research</h3>
            <p className="text-base md:text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">The Trident Pipeline: Cloud-Native CI/CD for Physics-Driven Simulation Testing</p>
            <motion.div
              className="w-12 md:w-16 h-1 bg-primary mx-auto mt-3 md:mt-4"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>

          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <motion.div
                className="p-4 md:p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all"
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Cloud-Native Architecture</h4>
                    <p className="text-sm text-muted-foreground">Engineered Docker multi-stage builds and GitHub Actions for automated physics-driven regression testing with bit-for-bit identical simulation environments globally.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-4 md:p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all"
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">NRMSE Validation Framework</h4>
                    <p className="text-sm text-muted-foreground">Implemented Normalized Root Mean Square Error (NRMSE) based validation to maintain less than 1% error threshold in electromagnetic waveforms across all simulations.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-4 md:p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all"
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Elastic Scaling with HPC</h4>
                    <p className="text-sm text-muted-foreground">Architected elastic scaling model using Kubernetes (GKE/EKS) for High-Performance Computing workloads with dynamic resource allocation and cost optimization.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-4 md:p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all"
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Persistent Metadata Tracking</h4>
                    <p className="text-sm text-muted-foreground">Integrated PostgreSQL for comprehensive metadata tracking and HDF5 visual artifacts generation, transforming manual research workflow into fully automated pipeline.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-4 md:p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all"
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Enterprise-Grade Pipeline</h4>
                    <p className="text-sm text-muted-foreground">Transformed gprMax into a production-ready system ensuring long-term code integrity and reliability for the global geophysical research community.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-4 md:p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all"
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Scalable Infrastructure</h4>
                    <p className="text-sm text-muted-foreground">Built resilient, fully automated infrastructure supporting global simulation workloads with intelligent resource management and fail-safe mechanisms.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="flex justify-center mt-8 md:mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="https://github.com/pratiktech28/gprmax_Containerized.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
