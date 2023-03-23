"use client";

import { ReactNode } from "react";
import { ThemeProvider as TProvider } from "next-themes";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <TProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </TProvider>
  );
};

export default ThemeProvider;
