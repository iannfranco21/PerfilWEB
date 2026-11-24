import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iann Franco Hernandez Rojas — Ingeniero de Sistemas",
  description:
    "Portafolio personal de Iann Franco Hernandez Rojas, Ingeniero de Sistemas. Desarrollo y mantenimiento de software.",
  keywords: ["Iann Franco", "Ingeniero de Sistemas", "Portafolio", "Desarrollo de software", "Next.js"],
  authors: [{ name: "Iann Franco Hernandez Rojas" }],
  openGraph: {
    title: "Iann Franco Hernandez Rojas — Ingeniero de Sistemas",
    description: "Desarrollo y mantenimiento de software",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
