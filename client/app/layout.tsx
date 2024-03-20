import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YouTub",
  description: "Watch Videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
