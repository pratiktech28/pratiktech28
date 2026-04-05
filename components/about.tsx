"use client"

import { GraduationCap, Lightbulb, Users, Code2, Rocket, Target } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const highlights = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "Pursuing B.Tech in CSE with AI/ML specialization from Chameli Devi Group of Institutions, affiliated with RGPV (2025-2029).",
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description:
      "Passionate about AI, Machine Learning, and exploring real-world applications through hands-on projects and continuous learning.",
  },
  {
    icon: Users,
    title: "Tech Community",
    description:
      "Actively connecting with fellow developers and tech enthusiasts to grow together in the world of technology.",
  },
]

const stats = [
  { value: "4+", label: "Projects", icon: Rocket },
  { value: "5+", label: "Technologies", icon: Code2 },
  { value: "2025", label: "Started Coding", icon: Target },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-card/50 relative overflow-hidden" ref={sectionRef}>
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
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
            About Me
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Who I Am</h2>
          <motion.div
            className="w-12 md:w-16 h-1 bg-primary mx-auto mt-3 md:mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="flex items-center gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Code2 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">Passion & Purpose</h3>
            </motion.div>

            {[
              "I am Prateek Sharma, a Computer Science student specializing in Artificial Intelligence and Machine Learning. My academic journey focuses on leveraging technology to build innovative solutions that create meaningful impact.",
              "I'm currently building a strong foundation in Python, C++, Java, and Data Structures & Algorithms. Passionate about technology and coding, I aim to explore real-world applications of AI/ML through hands-on projects.",
              "I'm actively working on improving my programming skills and building a strong technical profile for future internships and opportunities in the field of AI/ML. Let's connect and grow together!",
            ].map((text, index) => (
              <motion.p
                key={index}
                className="text-sm md:text-base text-muted-foreground leading-relaxed text-center lg:text-left"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
              >
                {text}
              </motion.p>
            ))}

            <motion.div
              className="grid grid-cols-3 gap-2 md:gap-4 pt-4 md:pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-3 md:p-4 bg-card rounded-lg border border-border relative overflow-hidden group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <motion.div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <motion.div
                    className="relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-primary mx-auto mb-1 md:mb-2" />
                    <div className="text-lg md:text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-[10px] md:text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-3 md:space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="p-4 md:p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all group relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10, boxShadow: "0 10px 40px rgba(59, 130, 246, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start gap-3 md:gap-4 relative z-10">
                  <motion.div
                    className="p-2 md:p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors shrink-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-primary mb-1 md:mb-2">{item.title}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
