import "./globals.css";

import ThemeProvider from "@/theme/ThemeProvider";
import { Lato } from "next/font/google";
import Navbar from "@/components/Nav";

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
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
