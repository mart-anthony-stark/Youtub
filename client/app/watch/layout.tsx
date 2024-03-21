import MainTemplate from "@/components/templates/MainTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTub - watch",
  description: "Watch Videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainTemplate>
      {children}
    </MainTemplate>
  );
}
