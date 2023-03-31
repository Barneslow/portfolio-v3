import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "Project Page",
  description: "Current Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="h-full pt-20">{children}</section>;
}
