import Header from "@/components/layout/Header";
import "./globals.css";

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
        <Header/>
        {children}
      </body>
    </html>
  );
}
