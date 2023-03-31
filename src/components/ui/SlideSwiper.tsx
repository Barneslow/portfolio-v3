"use client";

import { ChartIcon, CodeIcon, PaintBrushIcon } from "../icons/SkillsIcons";

import SkillCard from "../SkillCard";

export default function SlideSwiper() {
  return (
    <div className="flex flex-col overfollow-scroll space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
      <SkillCard
        index={0}
        color={{
          light: "text-green-800",
          dark: "dark:text-green-400",
          borderLight: "border-green-800",
          borderDark: "dark:border-green-400",
        }}
        heading="Designer"
        description="Minimalistic content structure with clean, colourful design patterns.
        Varied animations to a page to life!"
        title="Plaforms used"
        categories="UX, UI, Web, Apps, Logos"
        list={[
          "Framer Motion",
          "React-Native-Reanimated",
          "Photoshop",
          "Tailwind / CSS / Sass",
          "Figma",
        ]}
        children={<PaintBrushIcon />}
      />

      <SkillCard
        index={1}
        color={{
          light: "text-blue-800",
          dark: "dark:text-blue-400",
          borderLight: "border-blue-800",
          borderDark: "dark:border-blue-400",
        }}
        title="Developer"
        description=" Writing elegant, legible and reusable code. Imagination and creation!
        Tackling problems and finding solutions!"
        build
        children={<CodeIcon />}
      />

      <SkillCard
        index={2}
        color={{
          light: "text-red-800",
          dark: "dark:text-red-400",
          borderLight: "border-red-800",
          borderDark: "dark:border-red-400",
        }}
        heading="Marketer"
        description="Running million dollar social media campaigns. Designing, analysing
          and scaling across all major platforms"
        title="Plaforms used"
        categories="Facebook, Snapchat, Tiktok, Twitter, Instagram"
        list={[
          "Photoshop / PremierPro / Canva",
          "Unbounce / ClickFunnels",
          "Internal campaign managers",
          "Wordpress",
          "Voluum",
        ]}
        children={<ChartIcon />}
      />
    </div>
  );
}
