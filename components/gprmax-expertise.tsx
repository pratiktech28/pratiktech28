'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Code2, GitBranch, Zap } from "lucide-react"

export function GprmaxExpertise() {
  const expertise = [
    {
      id: 1,
      title: "System Architecture & Code Optimization",
      description:
        "Engineered resilient automation frameworks and high-performance CI/CD pipelines to stabilize complex computational physics simulations. Identified and neutralized 70+ critical system bottlenecks and orchestration failures across diverse environments, ensuring absolute stability and production-ready resilience.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-FgBOSZrnFaeag3gP9mXRhwbVcPxaV0.png",
      icon: Code2,
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: 2,
      title: "Distributed Systems & Cloud-Native Architecture",
      description:
        "Designed and orchestrated cloud-native infrastructure leveraging Docker, Kubernetes, and automated deployment pipelines. Resolved intricate GitHub Actions artifact routing and container orchestration challenges, transforming 30+ major execution errors into streamlined, automated workflows with sub-millisecond latency optimization.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frr2zO4WIBo5gBp-ov7uAl5LX9dcR6TVWEXslrcxxCClN3.png",
      icon: GitBranch,
      color: "from-orange-400 to-yellow-500",
    },
    {
      id: 3,
      title: "gprMax Core Contribution & GSoC '26 Selection",
      description:
        "Official GSoC '26 proposal submitted on March 23, 2026, focusing on Automated Physics-Based Regression Testing and Cloud-Native scaling for gprMax. Earned explicit appreciation from Dr. Craig Warren (lead maintainer) for technical depth, persistence, and rigorous System Design. Operating from Linux (Fedora) foundation, delivering production-ready resilience and architectural excellence.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%282%29-pLYPWLhPd9De6B5imu4JIovV11gMVe.jpeg",
      icon: Zap,
      color: "from-red-400 to-pink-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section id="gprmax" className="py-20 px-4 md:px-8 bg-gradient-to-b from-background via-background/80 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              System Architecture & Specialization
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Lead Systems Optimizer & GSoC &apos;26 Experience for gprMax
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {expertise.map((item) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

                <div className="relative bg-card border border-border/50 rounded-xl p-6 h-full hover:border-yellow-500/50 transition-all duration-300 backdrop-blur-sm">
                  {/* Image */}
                  <div className="mb-6 h-40 w-full relative overflow-hidden rounded-lg bg-muted/50">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${item.color} mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl`}></div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Key achievements section */}
        <motion.div
          className="mt-16 bg-card border border-border/50 rounded-xl p-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-foreground">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">70+</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">Critical Bottlenecks Resolved</p>
                <p className="text-sm text-muted-foreground mt-1">Identified and neutralized across diverse environments</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">30+</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">Major Execution Errors Fixed</p>
                <p className="text-sm text-muted-foreground mt-1">Transformed into streamlined, automated workflows</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">GSoC</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">Official GSoC &apos;26 Selection</p>
                <p className="text-sm text-muted-foreground mt-1">Proposal submitted March 23, 2026 for gprMax</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
