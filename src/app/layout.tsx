import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes"; 
import type { Viewport } from 'next';
import NoiseBackground from "@/components/ui/NoiseBackground";
import LenisProvider from "@/components/ui/LenisProvider";
const poppins = localFont({
  src: "./fonts/Poppins-Black.ttf",
  variable: "--font-geist-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});
const cairo = localFont({
  src: "./fonts/Cairo-VariableFont_slnt,wght.ttf",
  variable: "--font-geist-mono",
  weight: "100 200 300 400 500 600 700 800 900",
});
export const viewport: Viewport = {
  themeColor: "#6366f1",
};
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fullstack Portofolio",
  description: "Front End Developer Portfolio",
  keywords: "Front End Developer, Portfolio, Web Development",
  openGraph: {
    title: "Portfolio App",
    description: "FullStack Developer Portfolio",
    site_name: "Mohamed Fekry Portfolio",
    themeColor: "#6366f1",
    type: "website",
    url: "https://bytefolio.vercel.app",
    images: [
      {
        url: "https://res.cloudinary.com/difez8gdw/image/upload/v1750365847/New_Bitmap_image_-_Copy_ldc8br.png",
        width: 800,
        height: 600,
        alt: "Portfolio Preview Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio App",
    description: "FullStack Developer Portfolio",
    images: [
      "https://res.cloudinary.com/difez8gdw/image/upload/v1750365847/New_Bitmap_image_-_Copy_ldc8br.png",
    ],
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
        <link rel="icon" href="/photo.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${cairo.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="portfolio-theme"
        >
          <NoiseBackground />
          <LenisProvider>
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
