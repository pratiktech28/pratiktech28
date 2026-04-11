"use client"

import { Globe, Zap, Users, Award, Cloud, GitBranch } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const visionaryPoints = [
  {
    icon: Award,
    title: "Google Verified Status",
    description: "Recognized by Google Search Authority as an Infrastructure Architect with proven expertise in scalable systems design.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/november-2-2018-sunnyvale-ca-usa-google-sign-in-front-of-the-entrance-to-one-of-their-office-buildings-located-in-silicon-valley-R0GK28-kNxAxBme8UvlmEc8nRzybo7x2fwG5u.jpg",
  },
  {
    icon: GitBranch,
    title: "GSoC '26 Contributor",
    description: "Contributing to gprMax as a Google Summer of Code 2026 contributor, building high-performance electromagnetic simulation infrastructure.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/googly-UYBTyeSLjReVghy9ClNDHrx4KoqJnC.webp",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "Designing resilient, scalable cloud infrastructure with Kubernetes and advanced DevOps practices for enterprise-grade systems.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Google_Bay_View_22-02_BIG_THA_0228.max-1000x1000-1-WQMw1RpBXK4sZeFVgitBPkEYDwcvXs.jpg",
  },
  {
    icon: Zap,
    title: "Silicon Valley Standards",
    description: "Merging world-class engineering practices with cutting-edge innovation, following patterns established by leading tech companies.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google-headquarters-mountain-view-california-xQX3lQY9BC7gu9TdVdw6dCmUXYMjGH.avif",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function GlobalVisionary() {
  return (
    <section id="global-visionary" className="py-12 md:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 border border-primary/20 rounded-full text-xs md:text-sm font-medium text-primary mb-4 md:mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Globe className="w-4 h-4" />
            Global Vision
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Global Visionary
          </h2>
          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Architecting the future of distributed systems and cloud infrastructure through innovation, collaboration, and unwavering commitment to excellence.
          </motion.p>
          <motion.div
            className="w-12 md:w-16 h-1 bg-primary mx-auto mt-6 md:mt-8"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Vision Points Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {visionaryPoints.map((point, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-card/50 border border-border hover:border-primary/50 transition-all duration-300">
                {/* Image Section */}
                <div className="relative h-64 md:h-80 w-full overflow-hidden bg-muted">
                  <motion.img
                    src={point.image}
                    alt={point.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Icon Badge */}
                  <motion.div
                    className="absolute top-4 right-4 p-3 bg-primary/90 rounded-lg backdrop-blur-sm border border-primary/20"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <point.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Content Section */}
                <motion.div
                  className="relative p-6 md:p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>

                  {/* Accent Line */}
                  <motion.div
                    className="mt-4 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full w-0 group-hover:w-16 transition-all duration-300"
                  />
                </motion.div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          className="mt-16 md:mt-20 lg:mt-24 relative p-8 md:p-10 lg:p-12 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div className="flex items-start gap-4 md:gap-6">
            <motion.div
              className="flex-shrink-0 p-3 md:p-4 bg-primary/20 rounded-lg"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              <Users className="w-6 h-6 md:w-7 md:h-7 text-primary" />
            </motion.div>
            <div>
              <h4 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                Commitment to Excellence
              </h4>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                By merging silicon-valley standards with cutting-edge engineering, I am dedicated to redefining how the world builds and scales resilient software infrastructures. My vision transcends geographical boundaries—fostering collaborative innovation that empowers teams globally to achieve transformative results.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
