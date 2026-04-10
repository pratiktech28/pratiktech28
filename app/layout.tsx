import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0a0a0a",
}

export const metadata: Metadata = {
  title: "Prateek Sharma | Cloud Architect & Open Source Contributor",
  description:
    "Cloud Architect & Keploy Verified Contributor specializing in Infrastructure as Code, Kubernetes, CI/CD pipelines, and Google Cloud Security. Expert in system design and open-source ecosystems.",
  keywords: [
    "Cloud Architecture",
    "Infrastructure as Code",
    "Kubernetes",
    "CI/CD Pipelines",
    "Google Cloud Security",
    "System Architecture",
    "Golang",
    "Open Source",
    "Keploy",
    "DevOps",
  ],
  authors: [{ name: "Prateek Sharma", url: "https://pratiksharma.vercel.app" }],
  creator: "Prateek Sharma",
  publisher: "Prateek Sharma",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  generator: "Next.js",
  alternates: {
    canonical: "https://pratiksharma.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pratiksharma.vercel.app",
    siteName: "Prateek Sharma",
    title: "Prateek Sharma | Cloud Architect & Open Source Contributor",
    description:
      "Cloud Architect & Keploy Verified Contributor specializing in Infrastructure as Code, Kubernetes, and CI/CD pipelines.",
    images: [
      {
        url: "https://pratiksharma.vercel.app/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Prateek Sharma - Cloud Architect",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prateek Sharma | Cloud Architect & Open Source Contributor",
    description:
      "Cloud Architect & Keploy Verified Contributor specializing in Infrastructure as Code and DevOps.",
    images: ["https://pratiksharma.vercel.app/profile.jpg"],
  },
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
    shortcut: "/icon.svg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Prateek Sharma",
  },
  formatDetection: {
    telephone: false,
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Prateek Sharma",
    alternateName: "pratiktech28",
    url: "https://pratiksharma.vercel.app",
    image: "https://pratiksharma.vercel.app/profile.jpg",
    jobTitle: "Cloud Architect & Keploy Verified Contributor",
    description:
      "Verified Open Source Contributor and Member at Keploy. Recognized by Google Search AI for expertise in Cloud Infrastructure, System Primitives, and CI/CD automation.",
    brand: {
      "@type": "Brand",
      name: "pratiktech28",
      description:
        "Digital identity focused on infrastructure engineering and Google-backed open-source ecosystems.",
    },
    award: [
      "Keploy Quick Draw Badge",
      "Keploy Verified Member Status",
      "Google Search AI Featured Entity",
    ],
    knowsAbout: [
      "Google Cloud Security",
      "Infrastructure as Code",
      "CI/CD Pipelines",
      "Kubernetes",
      "Golang",
      "Keploy Test Generation",
      "System Architecture",
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "Keploy",
        url: "https://keploy.io",
        roleName: "Verified Contributor & Member",
      },
    ],
    affiliation: [
      {
        "@type": "Organization",
        name: "Google Summer of Code",
        url: "https://summerofcode.withgoogle.com/",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/in/prateeksharma-infra/",
      "https://github.com/pratiktech28",
      "https://leetcode.com/pratiktech28",
      "https://devpost.com/pratiktech28",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Keploy Open Source Organization",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Indore Institute of Science and Technology",
    },
  }

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Cloud Architect & Keploy Verified Contributor specializing in Infrastructure as Code, Kubernetes, CI/CD pipelines, and Google Cloud Security."
        />
        <meta
          name="keywords"
          content="Cloud Architecture, Infrastructure as Code, Kubernetes, CI/CD, Google Cloud, Golang, DevOps, Keploy, Open Source"
        />
        <meta name="author" content="Prateek Sharma" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Prateek Sharma" />
        <link rel="canonical" href="https://pratiksharma.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pratiksharma.vercel.app" />
        <meta property="og:title" content="Prateek Sharma | Cloud Architect & Open Source Contributor" />
        <meta
          property="og:description"
          content="Cloud Architect & Keploy Verified Contributor specializing in Infrastructure as Code, Kubernetes, and CI/CD pipelines."
        />
        <meta property="og:image" content="https://pratiksharma.vercel.app/profile.jpg" />
        <meta property="og:site_name" content="Prateek Sharma" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://pratiksharma.vercel.app" />
        <meta name="twitter:title" content="Prateek Sharma | Cloud Architect & Open Source Contributor" />
        <meta
          name="twitter:description"
          content="Cloud Architect & Keploy Verified Contributor specializing in Infrastructure as Code and DevOps."
        />
        <meta name="twitter:image" content="https://pratiksharma.vercel.app/profile.jpg" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Prateek Sharma" />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
