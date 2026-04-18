import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Yves Sheja N M | Software Engineer",
  description: "Software engineer focused on backend architecture, API integrations, analytics-ready systems, and modern full-stack development. Building scalable systems that ship.",
  keywords: ["Software Engineer", "Backend Developer", "Full-Stack Developer", "React", "Node.js", "API Design", "Kigali", "Rwanda"],
  authors: [{ name: "Yves Sheja N M" }],
  creator: "Yves Sheja N M",
  icons: {
    icon: "/port-ic-removebg-preview.png",
    shortcut: "/port-ic-removebg-preview.png",
    apple: "/port-ic-removebg-preview.png",
  },
  openGraph: {
    title: "Yves Sheja N M | Software Engineer",
    description: "Software engineer focused on backend architecture, API integrations, and modern full-stack development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yves Sheja N M | Software Engineer",
    description: "Building scalable backend systems, intelligent data pipelines, and production-ready web platforms.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} min-h-full flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}
