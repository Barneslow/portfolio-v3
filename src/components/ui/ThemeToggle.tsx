"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Sun, Moon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "./DropdownMenu";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className=" nav-btn">
          <Sun className="rotate-0 scale-100 transition-all  hover:text-zinc-900 dark:-rotate-90 dark:scale-0 dark:text-zinc-500 dark:hover:text-slate-100" />
          <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-zinc-900" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" forceMount>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
