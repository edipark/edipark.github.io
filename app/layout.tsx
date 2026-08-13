import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://edipark.github.io"),
  title: "Edward Park — Designer & Developer",
  description:
    "Edward Park designs and builds clear, thoughtful digital experiences.",
  openGraph: {
    title: "Edward Park — Designer & Developer",
    description: "Clear digital experiences, designed and built with care.",
    url: "/",
    siteName: "Edward Park",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Edward Park — Clear digital experiences." }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edward Park — Designer & Developer",
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
