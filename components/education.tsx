"use client"

import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const education = [
  {
    degree: "Bachelor of Technology",
    field: "CSE with AI/ML Specialization",
    institution: "Chameli Devi Group of Institutions",
    affiliation: "Affiliated with RGPV",
    location: "Indore, Madhya Pradesh, India",
    period: "2025 - 2029",
    status: "Currently Pursuing",
    highlights: [
      "Specializing in Artificial Intelligence and Machine Learning",
      "Building strong foundation in Data Structures & Algorithms",
      "Focus on Python, C++, Java programming languages",
    ],
  },
  {
    degree: "Bachelor of Technology",
    field: "CSE with AI/ML",
    institution: "Rajiv Gandhi Prodyogiki Vishwavidyalaya (RGPV)",
    location: "Madhya Pradesh, India",
    period: "July 2025 - December 2029",
    status: "University Affiliation",
    highlights: [
      "State Technical University of Madhya Pradesh",
      "Recognized degree program in Computer Science Engineering",
    ],
  },
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

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function Education() {
  return (
    <section id="education" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <motion.div
        className="absolute top-1/3 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity } as any}
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
            Education
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Academic Background</h2>
          <motion.div
            className="w-12 md:w-16 h-1 bg-primary mx-auto mt-3 md:mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="p-4 md:p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group relative overflow-hidden"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

              <div className="relative z-10">
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <motion.div
                    className="p-2 md:p-3 bg-primary/10 rounded-lg shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm md:text-base text-foreground">{edu.degree}</h3>
                    <p className="text-primary text-xs md:text-sm">{edu.field}</p>
                  </div>
                  <motion.span
                    className="shrink-0 px-2 py-0.5 bg-primary/10 text-primary text-[10px] md:text-xs rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {edu.status}
                  </motion.span>
                </div>

                <p className="font-medium text-sm md:text-base text-foreground mb-1 md:mb-2">{edu.institution}</p>
                {edu.affiliation && (
                  <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">{edu.affiliation}</p>
                )}

                <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                    {edu.period}
                  </span>
                </div>

                <ul className="space-y-1.5 md:space-y-2">
                  {edu.highlights.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + itemIndex * 0.1 }}
                    >
                      <motion.span
                        className="w-1 h-1 md:w-1.5 md:h-1.5 bg-primary rounded-full mt-1.5 shrink-0"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + itemIndex * 0.1 }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
