import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://edipark.github.io"),
  title: "Sunghyun Park — Designer & Developer",
  description:
    "Sunghyun Park designs and builds clear, thoughtful digital experiences.",
  openGraph: {
    title: "Sunghyun Park — Designer & Developer",
    description: "Clear digital experiences, designed and built with care.",
    url: "/",
    siteName: "Sunghyun Park",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sunghyun Park — Clear digital experiences." }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunghyun Park — Designer & Developer",
    description: "Clear digital experiences, designed and built with care.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
