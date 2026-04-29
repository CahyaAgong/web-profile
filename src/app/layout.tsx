import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const siteUrl = "https://cahya-agung.my.id";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cahya Agung | Middle to Senior Software Engineer Indonesia",
    template: "%s | Cahya Agung",
  },
  description: "Portfolio of Cahya Agung, a Middle to Senior Software Engineer with 6+ years of experience specializing in React, Next.js, Node.js, TypeScript, and modern web technologies. Based in Indonesia.",
  keywords: [
    "Cahya Agung",
    "software engineer",
    "full stack developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "TypeScript developer",
    "Indonesia software engineer",
    "web developer Indonesia",
    "senior software engineer",
    "portfolio",
  ],
  authors: [{ name: "Cahya Agung", url: siteUrl }],
  creator: "Cahya Agung",
  publisher: "Cahya Agung",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Cahya Agung Portfolio",
    title: "Cahya Agung | Middle to Senior Software Engineer Indonesia",
    description: "Portfolio of Cahya Agung, a Middle to Senior Software Engineer with 6+ years of experience. Specializing in React, Next.js, Node.js, and modern web technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cahya Agung - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cahya Agung | Software Engineer",
    description: "Portfolio of Cahya Agung, a Middle to Senior Software Engineer with 6+ years of experience.",
    creator: "@cahyaagung",
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
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={siteUrl} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${playfair.variable} min-h-full flex flex-col`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}