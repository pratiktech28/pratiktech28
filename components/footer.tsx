"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      className="py-6 md:py-8 border-t border-border relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-4">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-base md:text-lg font-bold text-primary">
              Prateek Sharma
            </Link>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">AI/ML Enthusiast | CS Student</p>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {[
              { href: "https://github.com/pratiktech28", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/prateeksharma2807", icon: Linkedin, label: "LinkedIn" },
              { href: "https://twitter.com/ipratik_sharma", icon: Twitter, label: "Twitter" },
              { href: "mailto:pratiktech28@gmail.com", icon: Mail, label: "Email" },
            ].map((social, index) => (
              <motion.div
                key={social.label}
                whileHover={{ scale: 1.2, rotate: 5, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Link
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="text-xs md:text-sm text-muted-foreground flex items-center gap-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            >
              <Heart className="w-3 h-3 md:w-4 md:h-4 text-red-500 fill-red-500" />
            </motion.span>{" "}
            © {new Date().getFullYear()}
          </motion.p>
        </div>
      </div>
    </motion.footer>
  )
}
