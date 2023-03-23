import "./globals.css";

import ThemeProvider from "@/theme/ThemeProvider";
import { Lato } from "next/font/google";
import Navbar from "@/components/Nav";
import Head from "next/head";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "Project Portfolio",
  description: "A display of my work to date",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <ThemeProvider>
          <Navbar />
          <main className="bg-zinc-50 min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
