"use client"

import { motion } from "framer-motion"
import { Award, GitBranch, MessageSquare, Zap } from "lucide-react"

const milestones = [
  {
    title: "Galaxy Brain (x3)",
    icon: MessageSquare,
    color: "from-purple-500 to-purple-600",
    description: "Answered 16+ community discussions with accepted solutions. Demonstrated deep technical expertise and problem-solving across gprMax and Keploy ecosystems.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20From%202026-04-08%2015-04-52-h38czhw5Uke9cRiYl3l5MTpk4IFBK1.png",
  },
  {
    title: "Pull Shark",
    icon: GitBranch,
    color: "from-blue-500 to-blue-600",
    description: "Merged multiple high-impact pull requests. Demonstrated proficiency in code quality, collaborative development, and contributing to major infrastructure projects.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20From%202026-04-08%2015-05-07-LlFzkGhWCVngtdfFrUYGExnBrLJYeR.png",
  },
  {
    title: "Quickdraw",
    icon: Zap,
    color: "from-orange-500 to-orange-600",
    description: "Resolved critical repository issues in just 5 minutes. Verified Infrastructure Contributor at Keploy with unmatched response time and problem-solving velocity.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ppn5LOoXQOZhYlxIfTWgxlWBKEdZ52.png",
  },
  {
    title: "Pair Extraordinaire",
    icon: Award,
    color: "from-green-500 to-green-600",
    description: "Coauthored commits on multiple merged pull requests. Exhibited exceptional collaboration skills and ability to work effectively with distributed teams on complex systems.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20From%202026-04-08%2015-04-29-0rEZiCHF5ZNrxjJQMpfUfd513Gm3nr.png",
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

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
}

export function Milestones() {
  return (
    <section id="milestones" className="py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden">
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity } as any}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity } as any}
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
            Community Recognition
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Infrastructure & Global Milestones</h2>
          <motion.div
            className="w-12 md:w-16 h-1 bg-primary mx-auto mt-3 md:mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-border bg-card/50 hover:bg-card transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(59, 130, 246, 0.15)" }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 p-4 md:p-5 flex flex-col h-full">
                {/* Badge Image */}
                <motion.div
                  className="mb-4 h-40 overflow-hidden rounded-lg bg-muted flex items-center justify-center"
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Icon and Title */}
                <div className="flex items-center gap-2 mb-2">
                  <motion.div
                    className={`p-2 rounded-lg bg-gradient-to-r ${milestone.color} text-white`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <milestone.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.div>
                  <h3 className="text-base md:text-lg font-bold text-foreground">{milestone.title}</h3>
                </div>

                {/* Description */}
                <motion.p
                  className="text-xs md:text-sm text-muted-foreground leading-relaxed flex-grow"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {milestone.description}
                </motion.p>

                {/* Bottom accent */}
                <motion.div
                  className={`mt-3 h-0.5 bg-gradient-to-r ${milestone.color} rounded-full`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
