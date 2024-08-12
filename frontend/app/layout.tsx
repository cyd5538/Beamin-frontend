import Menu from "@/components/Nav/Menu";
import "./globals.css";
import LoginModal from "@/components/Modal/LoginModal/LoginModal";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
      <div className="w-[440px] mx-auto border bg-white min-h-screen">
        {children}
        <LoginModal />
        <Menu />
      </div>
      </body>
    </html>
  );
}
