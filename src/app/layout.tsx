import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes"; 
import type { Viewport } from 'next';
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
        {/* تغليف المحتوى بـ ThemeProvider */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
