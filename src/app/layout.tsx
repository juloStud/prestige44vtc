import type { Metadata } from "next";
import { Arvo, Open_Sans, Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });
const opensans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Ker-V vos chauffeurs privés",
  description: "Ker-V vos chauffeurs privés",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${opensans.className}`}>
        {children}
      </body>
    </html>
  );
}