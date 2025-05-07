import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Exambazz",
  description: "Assess Smarter, Teach Better",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased bg-gray-50`}>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
