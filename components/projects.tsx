"use client"

import { Github, ExternalLink, Gamepad2, Bot, Mic, Car, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Bike Driving 3D",
    description:
      "An immersive 3D bike driving simulation game built with web technologies. Features realistic physics, multiple environments, and engaging gameplay.",
    tags: ["JavaScript", "Three.js", "WebGL", "3D Graphics"],
    icon: Gamepad2,
    liveUrl: "https://pratiktech28.github.io/bike_driving-_3d/",
    githubUrl: "https://github.com/pratiktech28/bike_driving-_3d",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-500/10 to-emerald-500/10",
  },
  {
    title: "AI Restaurant Web Architect",
    description:
      "An AI-powered restaurant website builder that uses intelligent algorithms to create and customize restaurant websites with menu management.",
    tags: ["Python", "AI/ML", "Web Development", "NLP"],
    icon: Bot,
    liveUrl: null,
    githubUrl: "https://github.com/pratiktech28/AI-Restaurant-Web-Architect",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Vocal ComputeAI",
    description:
      "A voice-controlled AI computing assistant that processes natural language commands to perform computational tasks hands-free.",
    tags: ["Python", "Speech Recognition", "AI", "NLP"],
    icon: Mic,
    liveUrl: null,
    githubUrl: "https://github.com/pratiktech28/Vocal-computeAI",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "Car Racing Game",
    description:
      "An exciting car racing game featuring multiple tracks, realistic controls, and competitive gameplay built with modern game dev techniques.",
    tags: ["JavaScript", "Game Dev", "Canvas", "Physics"],
    icon: Car,
    liveUrl: null,
    githubUrl: "https://github.com/pratiktech28/car_racing",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-500/10 to-red-500/10",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

export function Projects() {
  return (
    <section id="projects" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[200px] md:h-[400px] bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
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
            className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-1 md:px-4 md:py-1.5 bg-secondary text-xs md:text-sm font-medium rounded-full text-foreground mb-3 md:mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            Portfolio
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
          <motion.div
            className="w-12 md:w-16 h-1 bg-primary mx-auto mt-3 md:mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative p-4 md:p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{ perspective: 1000 }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <motion.div
                className={`absolute inset-0 rounded-xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
              />

              <motion.div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <motion.div
                    className={`p-2 md:p-3 bg-gradient-to-br ${project.bgColor} rounded-lg border border-border`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <project.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </motion.div>
                  <div className="flex gap-1.5 md:gap-2">
                    {project.liveUrl && (
                      <motion.div whileHover={{ scale: 1.2, y: -2 }} whileTap={{ scale: 0.9 }}>
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 md:p-2 text-muted-foreground hover:text-primary transition-colors bg-secondary/50 rounded-lg"
                          aria-label={`View ${project.title} live`}
                        >
                          <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                        </Link>
                      </motion.div>
                    )}
                    <motion.div whileHover={{ scale: 1.2, y: -2 }} whileTap={{ scale: 0.9 }}>
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 md:p-2 text-muted-foreground hover:text-primary transition-colors bg-secondary/50 rounded-lg"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-4 h-4 md:w-5 md:h-5" />
                      </Link>
                    </motion.div>
                  </div>
                </div>

                <motion.h3
                  className="text-lg md:text-xl font-semibold text-foreground mb-1.5 md:mb-2 group-hover:text-primary transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs font-medium bg-secondary text-foreground rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + tagIndex * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {project.liveUrl && (
                  <motion.div
                    className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-border"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        size="sm"
                        className={`bg-gradient-to-r ${project.color} text-white hover:opacity-90 shadow-lg text-xs md:text-sm`}
                        asChild
                      >
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-8 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-secondary bg-transparent group text-sm md:text-base"
              asChild
            >
              <Link href="https://github.com/pratiktech28" target="_blank" rel="noopener noreferrer">
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="mr-2"
                >
                  <Github className="w-4 h-4 md:w-5 md:h-5" />
                </motion.span>
                View All Projects
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
