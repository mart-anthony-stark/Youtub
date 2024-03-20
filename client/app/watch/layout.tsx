import AppBar from "@/components/molecules/AppBar/AppBar";
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
    <main className="flex min-h-screen bg-white dark:bg-yt-black flex-col">
    <AppBar />
    <div>
      <div className="px-6 flex flex-col flex-grow pt-8">
        {children}
      </div>
    </div>
  </main>
  );
}
