import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CA Vishal Singh and Associates",
  description: "Professional CA services for businesses and individuals. Tax planning, GST filing, financial modeling, and more.",
  keywords: "CA, chartered accountant, tax planning, GST filing, financial services, accounting services, India, wealth management",
  authors: [{ name: "CA Vishal Singh", url: "https://cavishalsingh.com" }],
  openGraph: {
    type: "website",
    url: "https://cavishalsingh.com",
    title: "CA Vishal Singh and Associates",
    description: "Professional CA services for businesses and individuals. Tax planning, GST filing, financial modeling, and more.",
    siteName: "CA Vishal Singh and Associates"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/assets/ca-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Palanquin:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
