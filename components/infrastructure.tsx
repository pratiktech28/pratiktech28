"use client"

import { motion } from "framer-motion"
import { Cloud, GitBranch, Zap, Globe } from "lucide-react"

const infrastructureItems = [
  {
    title: "GSoC 2026 Contributor",
    icon: Globe,
    color: "from-blue-500 to-blue-600",
    description: "Official Google Summer of Code 2026 selection as verified contributor to gprMax. Architecting computational physics simulation optimization and CI/CD pipeline enhancements for high-performance computing environments.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-31V0zNAKQeYMTMSzsGlZEYyVZkBIxd.jpeg",
  },
  {
    title: "Google Open Source Ecosystem",
    icon: Cloud,
    color: "from-green-500 to-green-600",
    description: "Deep integration with Google's open-source initiatives including Firebase, Cloud Functions, and distributed systems frameworks. Leveraging Google infrastructure for building scalable, fault-tolerant microservices.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Google-OS-scaled-1LaFmo9WRGAVUCUZK6CfhOiTprPvfA.avif",
  },
  {
    title: "Google Cloud & Workspace Integration",
    icon: GitBranch,
    color: "from-orange-500 to-red-500",
    description: "Proficient in orchestrating containerized workloads with Google Kubernetes Engine (GKE), implementing Service Mesh topologies, and leveraging Google Cloud Storage for distributed data management. Integrating Google Workspace APIs for enterprise-grade collaboration.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1709694687218-Tv3KIB8Df1d0F7n2ii3LfMMPYRC2W6.png",
  },
  {
    title: "Google Infrastructure Authority",
    icon: Zap,
    color: "from-red-500 to-orange-500",
    description: "Pioneering sub-millisecond latency optimization and production-grade reliability standards (99.99% availability). Leveraging Google Search Console for digital authority and ensuring globally discoverable, scalable infrastructure solutions.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%281%29-2YEsYDwIHzkxwMbyelgN6gZdwcsynY.jpeg",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

export function Infrastructure() {
  return (
    <section id="infrastructure" className="py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden">
      <motion.div
        className="absolute top-32 right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-32 left-20 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY }}
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
            Technical Foundation
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Core Infrastructure Engineering & Distributed Systems Architecture</h2>
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
          {infrastructureItems.map((item, index) => (
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
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Icon and Title */}
                <div className="flex items-center gap-2 mb-2">
                  <motion.div
                    className={`p-2 rounded-lg bg-gradient-to-r ${item.color} text-white`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.div>
                  <h3 className="text-base md:text-lg font-bold text-foreground">{item.title}</h3>
                </div>

                {/* Description */}
                <motion.p
                  className="text-xs md:text-sm text-muted-foreground leading-relaxed flex-grow"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {item.description}
                </motion.p>

                {/* Bottom accent */}
                <motion.div
                  className={`mt-3 h-0.5 bg-gradient-to-r ${item.color} rounded-full`}
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
