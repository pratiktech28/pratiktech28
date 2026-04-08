"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send, Linkedin, Github, Phone, Twitter, CheckCircle2, Camera, Trophy, Users } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "pratiktech28@gmail.com",
    href: "mailto:pratiktech28@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8273723090",
    href: "tel:+918273723090",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Indore, Madhya Pradesh, India",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/prateeksharma2807",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/pratiktech28",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/ipratik_sharma",
  },
  {
    icon: Camera,
    label: "Instagram",
    href: "https://www.instagram.com/pratiktech28/",
  },
  {
    icon: Trophy,
    label: "Kaggle",
    href: "https://www.kaggle.com/pratiktech28",
  },
  {
    icon: Users,
    label: "Discord",
    href: "https://discord.com/users/pratiktech28",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-card/50 relative overflow-hidden">
      <motion.div
        className="absolute top-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
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
            Contact
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Get In Touch</h2>
          <motion.div
            className="w-12 md:w-16 h-1 bg-primary mx-auto mt-3 md:mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-4 md:p-6 bg-card rounded-xl border border-border relative overflow-hidden"
            >
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    className="absolute inset-0 bg-card/95 flex items-center justify-center z-20 rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="text-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", duration: 0.5 }}
                    >
                      <CheckCircle2 className="w-12 h-12 md:w-16 md:h-16 text-green-500 mx-auto mb-3" />
                      <p className="text-base md:text-lg font-semibold text-foreground">Message Sent!</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground text-sm md:text-base"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2"
                  >
                    Your Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground text-sm md:text-base"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                className="mb-3 md:mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label
                  htmlFor="subject"
                  className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2"
                >
                  Subject *
                </label>
                <Input
                  id="subject"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground text-sm md:text-base"
                  required
                />
              </motion.div>

              <motion.div
                className="mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label
                  htmlFor="message"
                  className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2"
                >
                  Message *
                </label>
                <Textarea
                  id="message"
                  placeholder="I'd like to discuss a project..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground resize-none text-sm md:text-base"
                  required
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm md:text-base"
                >
                  <Send className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div
            className="space-y-3 md:space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="p-3 md:p-4 bg-card rounded-xl border border-border group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <motion.div
                    className="p-2 md:p-3 bg-primary/10 rounded-lg shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </motion.div>
                  <div className="min-w-0">
                    <p className="font-medium text-sm md:text-base text-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-xs md:text-sm text-muted-foreground truncate">{item.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="p-3 md:p-4 bg-card rounded-xl border border-border"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <p className="font-medium text-sm md:text-base text-foreground mb-3 md:mb-4">Follow Me</p>
              <div className="flex gap-2 md:gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 md:p-3 bg-secondary rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                    aria-label={link.label}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <link.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
