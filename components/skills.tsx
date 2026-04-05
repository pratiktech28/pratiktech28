"use client"

import { Code2, Monitor, Server, Database, Brain, Wrench } from "lucide-react"
import { motion } from "framer-motion"

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    description: "Core languages for development",
    skills: ["Python", "C++", "Java", "JavaScript"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Monitor,
    title: "Frontend Development",
    description: "Modern web development technologies",
    skills: ["HTML/CSS", "JavaScript", "React.js"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Server,
    title: "Backend & Frameworks",
    description: "Server-side technologies",
    skills: ["Node.js", "Express.js", "REST APIs"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Database,
    title: "Database & Cloud",
    description: "Database management and cloud platforms",
    skills: ["MySQL", "MongoDB", "Google Cloud"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Artificial Intelligence and ML technologies",
    skills: ["Machine Learning", "Data Analysis", "Python Libraries", "GenAI"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Wrench,
    title: "Tools & Design",
    description: "Development tools and design software",
    skills: ["Git", "GitHub", "VS Code", "Canva"],
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
      </div>
    </section>
  )
}
