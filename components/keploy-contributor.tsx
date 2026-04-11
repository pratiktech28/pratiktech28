"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Code2, GitFork, Zap, Shield } from "lucide-react"

const contributionPoints = [
  {
    icon: Code2,
    title: "Production-Grade Middleware",
    description: "Architecting and maintaining sophisticated middleware for API recording and replay engines with enterprise-scale reliability."
  },
  {
    icon: GitFork,
    title: "Global Maintainer Collaboration",
    description: "Working directly with international maintainers to refine system architecture and ensure seamless cloud-native integration."
  },
  {
    icon: Zap,
    title: "Test Lifecycle Optimization",
    description: "Contributing to core features that generate test cases from real-world traffic, significantly reducing testing complexity."
  },
  {
    icon: Shield,
    title: "System Design & Automation",
    description: "Leveraging GoLang, Kubernetes, and Docker to build enterprise-scale automated testing frameworks and ensure distributed system reliability."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function KeployContributor() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="relative w-16 h-16">
            <Image
              src="/keploy-logo.png"
              alt="Keploy Logo"
              width={64}
              height={64}
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Official Core Contributor
            </h2>
            <p className="text-lg text-accent font-semibold">Keploy (Open Source)</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <motion.div
            variants={itemVariants}
            className="space-y-4 text-muted-foreground leading-relaxed"
          >
            <p className="text-base md:text-lg">
              Since January 2026, I have been deeply embedded in the Keploy ecosystem as an Official Core Contributor, driving high-impact engineering within the automated testing domain. My journey involved rigorous technical contributions focused on architecting production-grade middleware and optimizing API recording-replay engines.
            </p>
            <p className="text-base md:text-lg">
              I have played a pivotal role in enhancing the reliability of distributed systems by developing sophisticated testing frameworks that simplify backend complexity. My work at Keploy isn&apos;t just about code; it&apos;s about <span className="text-accent font-semibold">Infrastructure Excellence</span>.
            </p>
            <p className="text-base md:text-lg">
              I have collaborated directly with global maintainers to refine system architecture, ensuring seamless integration for cloud-native applications. By leveraging technologies like GoLang, Kubernetes, and Docker, I&apos;ve contributed to core features that enable developers to generate test cases from real-world traffic, significantly reducing the testing lifecycle.
            </p>
            <p className="text-base md:text-lg font-semibold text-accent">
              This role has solidified my expertise in System Design and Enterprise-scale Automation, positioning me at the forefront of modern software reliability engineering.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative h-full"
          >
            <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="/keploy-mascot.png"
                alt="Keploy Mascot"
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/50 transition-colors duration-500" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6"
      >
        {contributionPoints.map((point, index) => {
          const Icon = point.icon
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 rounded-xl border border-border/50 bg-card/50 hover:bg-card/80 hover:border-accent/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="inline-flex p-3 rounded-lg bg-accent/10 mb-3">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
