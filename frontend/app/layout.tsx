import NetworkStatus from "@/components/common/NetworkStatus";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-screen flex flex-col bg-black text-white">
        <NetworkStatus/>
        <Navbar/>
        <main className="flex-1">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
