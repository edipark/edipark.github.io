import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://edipark.github.io"),
  title: "Sunghyun Park — Robotics",
  description:
    "Sunghyun Park is a robotics researcher working on learning-based control, locomotion, and manipulation.",
  openGraph: {
    title: "Sunghyun Park — Robotics",
    description: "Robotics, learning-based control, locomotion, and manipulation.",
    url: "/",
    siteName: "Sunghyun Park",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sunghyun Park — Robotics and learning-based control." }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunghyun Park — Robotics",
    description: "Robotics, learning-based control, locomotion, and manipulation.",
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
