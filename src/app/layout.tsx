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

export const metadata = {
  title: "Portfolio App",
  description: "Front End Developer Portfolio",
  keywords: "Front End Developer, Portfolio, Web Development",
  openGraph: {
    title: "Portfolio App",
    description: "Front End Developer Portfolio",
    site_name: "Mohamed Portfolio",
    themeColor: "#6366f1",
    type: "website",
    url: "https://0dev.vercel.app/",
    images: [
      {
        url: "https://res.cloudinary.com/difez8gdw/image/upload/v1739921112/photo_ypwsqd.png",
        width: 800,
        height: 600,
        alt: "Portfolio Preview Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio App",
    description: "Front End Developer Portfolio",
    images: [
      "https://res.cloudinary.com/difez8gdw/image/upload/v1739921112/photo_ypwsqd.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
