import AppBar from "@/components/molecules/AppBar/AppBar";
import CategoryList from "@/components/molecules/List/CategoryList";
import SidePanel from "@/components/molecules/SidePanel/SidePanel";
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
      <SidePanel />

      <div className="pl-0 sm:px-2 md:pl-16 laptop:pl-0 xl:pl-60 flex flex-col flex-grow pt-16">
        <CategoryList />
        {children}
      </div>
    </div>
  </main>
  );
}
