import NetworkStatus from "@/components/common/NetworkStatus";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-screen bg-black text-white flex flex-col">
        <NetworkStatus/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
