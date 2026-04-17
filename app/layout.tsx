import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Prateek Sharma | Infrastructure Cloud Architect & GSoC '26 Contributor",
  description:
    "Google Verified Software Developer and GSoC '26 Contributor at gprMax. Infrastructure Cloud Architect | Official Contributor @Keploy. Architecting high-availability distributed systems with expertise in Kubernetes, CI/CD pipelines, and API regression testing.",
  generator: "v0.app",
  verification: {
    google: "5EVEuQk_u3JU5trDaNLFlKSWYVaoam8SqeWwY8xJp0U",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Prateek Sharma",
    "alternateName": "Pratik Sharma",
    "url": "https://pratiksharma.me",
    "image": "https://pratiksharma.me/profile-pic.jpg",
    "jobTitle": "Infrastructure Cloud Architect & Open Source Contributor",
    "description": "Official Core Contributor at Keploy, Infrastructure Cloud Architect, and GSoC 2026 Contributor for gprMax. Expert in DevOps, Kubernetes, and Cloud-Native systems.",
    "sameAs": [
      "https://www.linkedin.com/in/prateeksharmadev",
      "https://github.com/prateeksharmadev",
      "https://www.instagram.com/prateeksharmadev",
      "https://www.kaggle.com/prateeksharmadev",
      "https://discordapp.com/users/prateeksharmadev",
      "https://twitter.com/prateeksharmadev"
    ],
    "knowsAbout": [
      "Cloud Computing",
      "Kubernetes",
      "Docker",
      "Infrastructure as Code",
      "Open Source Development",
      "Technical SEO",
      "Fedora Linux",
      "Go Programming"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Keploy",
      "sameAs": "https://keploy.io"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Chameli Devi Group of Institutions, Indore",
      "sameAs": "https://www.cdgi.edu.in"
    },
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Google Summer of Code",
        "alternateName": "GSoC 2026",
        "url": "https://summerofcode.withgoogle.com"
      },
      {
        "@type": "Organization",
        "name": "gprMax",
        "url": "https://www.gprmax.com"
      }
    ]
  }

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
