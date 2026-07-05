import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Niche Job Board",
  description: "Find opportunities in AI niche markets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}