"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Twitter, Sparkles } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  },
}

const glowAnimation = {
  boxShadow: [
    "0 0 20px rgba(59, 130, 246, 0.3)",
    "0 0 40px rgba(59, 130, 246, 0.5)",
    "0 0 20px rgba(59, 130, 246, 0.3)",
  ],
  transition: {
    duration: 2,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  },
}

export function Hero() {
  const nameText = "Prateek Sharma"

  return (
    <section id="home" className="min-h-[100dvh] flex items-center pt-16 md:pt-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-5 md:top-20 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-5 md:bottom-20 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/30"
                style={{ scale: 1.1 }}
                animate={{
                  rotate: 360,
                  borderColor: ["rgba(59, 130, 246, 0.3)", "rgba(59, 130, 246, 0.6)", "rgba(59, 130, 246, 0.3)"],
                }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
                style={{ scale: 1.2 }}
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              <motion.div
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 relative z-10"
                whileHover={{ scale: 1.05 }}
                animate={glowAnimation}
                transition={{ duration: 0.3 }}
              >
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photoi-4t2rl44xq8FugmwCvAkAJK4lb450eW.jpg" alt="Prateek Sharma" className="w-full h-full object-cover" />
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg shadow-primary/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <motion.div animate={floatingAnimation}>
                  <span className="text-primary-foreground text-[10px] md:text-xs font-semibold text-center px-1">
                    AI/ML
                    <br />
                    Enthusiast
                  </span>
                </motion.div>
              </motion.div>

              <motion.div
                className="hidden sm:block absolute -top-2 -left-2 p-2 bg-card rounded-lg border border-border shadow-lg"
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <span className="text-lg">🐍</span>
              </motion.div>
              <motion.div
                className="hidden sm:block absolute top-1/4 -right-4 md:-right-6 p-2 bg-card rounded-lg border border-border shadow-lg"
                animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
              >
                <span className="text-lg">🤖</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-3 md:space-y-4">
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 rounded-full border border-primary/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                </motion.div>
                <span className="text-xs md:text-sm text-primary font-medium">Available for Opportunities</span>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {"Hi, I'm "}
                <span className="text-primary relative">
                  {nameText.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                  <motion.span
                    className="absolute -bottom-1 md:-bottom-2 left-0 h-0.5 md:h-1 bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                  />
                </span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  Infrastructure & DevOps Engineer | GSoC '26 Contributor @gprMax | 🔍 Search &apos;pratiktech28&apos; on @google
                </motion.span>
              </motion.p>
            </div>

            <motion.p
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Architecting high-performance infrastructures with Docker and Kubernetes. Leading Project Trident (gprMax GSoC '26) and contributing to open source projects. Specializing in CI/CD pipelines, microservices, and computational physics automation.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 text-sm md:text-base"
                  asChild
                >
                  <Link href="#about">
                    Learn More
                    <motion.span
                      animate={{ y: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowDown className="w-4 h-4 ml-2" />
                    </motion.span>
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-secondary bg-transparent text-sm md:text-base"
                  asChild
                >
                  <Link href="#projects">View Projects</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 md:gap-4 pt-2 md:pt-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {[
                { href: "https://github.com/pratiktech28", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com/in/prateeksharma2807", icon: Linkedin, label: "LinkedIn" },
                { href: "https://twitter.com/ipratik_sharma", icon: Twitter, label: "Twitter" },
                { href: "mailto:pratiktech28@gmail.com", icon: Mail, label: "Email" },
              ].map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="p-2.5 md:p-3 bg-secondary/50 rounded-full text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center mt-8 md:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowDown className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
