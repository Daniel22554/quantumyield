import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "QuantumYield - Quantum-Powered DeFi Yields",
  description:
    "Harness the power of quantum algorithms to maximize your DeFi yields. Experience unprecedented returns with our revolutionary yield optimization protocol.",
  keywords: "DeFi, yield farming, quantum computing, cryptocurrency, staking, blockchain",
  authors: [{ name: "QuantumYield Team" }],
  openGraph: {
    title: "QuantumYield - Quantum-Powered DeFi Yields",
    description: "Revolutionary DeFi protocol with quantum-optimized yield strategies",
    url: "https://quantumyield.netlify.app",
    siteName: "QuantumYield",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QuantumYield - Quantum-Powered DeFi",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuantumYield - Quantum-Powered DeFi Yields",
    description: "Revolutionary DeFi protocol with quantum-optimized yield strategies",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
