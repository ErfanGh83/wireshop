import type { Metadata } from "next";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Vazirmatn } from "next/font/google";
import "./globals.css";

// const vazir = Vazirmatn({
//   subsets: ["arabic", "latin"],
//   variable: "--font-vazir",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

export const metadata: Metadata = {
  title: "فروشگاه",
  description: "ساخته شده با نکست جی‌اس",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`font-yekan antialiased bg-gray-800 text-right text-black dark:text-white scrollbar-modern`}
      >
        {children}
        <ToastContainer position="top-center" autoClose={4000} />
      </body>
    </html>
  );
}