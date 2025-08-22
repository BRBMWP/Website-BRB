import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tanaphop Sangwan — Portfolio",
  description:
    "Portfolio of Tanaphop Sangwan: projects, internships, academic work, awards, and contact.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Tanaphop Sangwan — Portfolio",
    description:
      "Projects, internships, academic work, awards, and contact information.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanaphop Sangwan — Portfolio",
    description:
      "Projects, internships, academic work, awards, and contact information.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
