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
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": "Prateek Sharma",
    "alternateName": ["pratiktech28", "Pratik Sharma"],
    "url": "https://portfolio-v0-seven-pi.vercel.app/",
    "image": "https://github.com/pratiktech28.png",
    "jobTitle": "Infrastructure Cloud Architect & Open Source Engineer",
    "description": "Google Verified Software Developer and GSoC '26 Contributor at gprMax. Leading infrastructure automation and cloud-native architecture. Official Core Contributor at Keploy with expertise in Go, TypeScript, and DevOps.",
    "sameAs": [
      "https://github.com/pratiktech28",
      "https://www.linkedin.com/in/pratiktech28",
      "https://twitter.com/pratiktech28",
      "https://search.google.com/local/writereview?placeid=VERIFIED_ENTITY_ID"
    ],
    "knowsAbout": [
      "Cloud Native Computing Foundation (CNCF)",
      "Infrastructure as Code (IaC)",
      "Google Summer of Code (GSoC)",
      "gprMax Electromagnetic Simulation",
      "Automated CI/CD Pipelines",
      "Docker & Kubernetes",
      "Cloud Security",
      "API Regression Testing"
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Keploy",
        "url": "https://keploy.io",
        "role": "Official Core Contributor",
        "description": "Actively maintaining and contributing to core API testing infrastructure."
      },
      {
        "@type": "Organization",
        "name": "Google Summer of Code",
        "url": "https://summerofcode.withgoogle.com/",
        "role": "GSoC 2026 Contributor",
        "member": {
          "@type": "SoftwareSourceCode",
          "name": "gprMax",
          "description": "Implementing high-performance infrastructure pipelines for electromagnetic simulation software."
        }
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Google Search Verified Entity Status",
        "credentialCategory": "Digital Identity Verification"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Open Source Core Contributor Badge",
        "recognizedBy": "Keploy & GSoC Community"
      }
    ],
    "award": [
      "Verified Google Knowledge Panel Status",
      "GSoC '26 Selected Proposal for gprMax",
      "Keploy Community Recognition Award"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Open Source Ecosystem",
      "location": "Global / Remote"
    }
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
