import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Link The World",
  description: "I am Link, trying to link the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
