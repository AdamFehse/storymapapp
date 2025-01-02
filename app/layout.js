// app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css'

import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// This is correct: pass an object describing your icons
export const metadata = {
  title: "Confluencenter Map App",
  description: "A Story Map App featuuring projects funded by the Conlfuencenter.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
