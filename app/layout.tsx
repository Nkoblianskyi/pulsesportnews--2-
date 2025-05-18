import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.scss"
import Header from "@/components/header"
import Footer from "@/components/footer"
import NewsTicker from "@/components/news-ticker"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PulseSport News - Noticias deportivas y pronósticos",
  description: "Portal líder en noticias deportivas y pronósticos de apuestas",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <NewsTicker />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'