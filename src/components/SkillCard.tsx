"use client";

import { PaintBrushIcon } from "./icons/SkillsIcons";

const SkillCard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-5 space-y-4 border-t-green-800 border-t-8 shadow-md rounded-lg bg-zinc-50 dark:bg-zinc-700 dark:border-t-green-500">
      <div className="w-24 h-24 p-2 bg-zinc-50 rounded-3xl border-black border-2">
        <PaintBrushIcon />
      </div>
      <h4 className="text-3xl font-extrabold text-green-800 dark:text-green-500">
        Designer
      </h4>
      <p className="max-w-md text-lg">
        Minimalistic content structure with clean, colourful design patterns.
        Varied animations to a page to life!
      </p>
      <h5 className="text-2xl font-extrabold text-green-800 border-b-2 border-zinc-300  dark:text-green-500">
        Things I enjoy designing
      </h5>
      <p className="text-lg">UX, UI, Web, Apps, Logos</p>
      <h5 className="text-2xl font-extrabold text-green-800 border-b-2 border-zinc-300  dark:text-green-500">
        Tools Used
      </h5>
      <ul className="flex flex-col space-y-2">
        <li className="text-lg">Framer Motion</li>
        <li className="text-lg">React-Native-Reanimated</li>
        <li className="text-lg">Tailwind / CSS / Sass</li>
        <li className="text-lg">Figma</li>
        <li className="text-lg">Photoshop</li>
      </ul>
    </div>
  );
};

// export default SkillCard;

// "use client";

// import { PaintBrushIcon } from "./icons/SkillsIcons";

// type SkillsCardProps = {
//   title: string;
//   description: string;
//   heading?: string;
//   skills?: string;
//   tools: string[];
//   color: string;
// };

// const SkillCard = ({
//   color,
//   title,
//   description,
//   tools,
//   heading,
//   skills,
// }: SkillsCardProps) => {
//   return (
//     <div
//       className={`flex flex-col items-center justify-center h-full text-center p-5 space-y-4 border-t-${color} border-t-8 shadow-md rounded-lg bg-zinc-50 dark:bg-zinc-700 dark:border-t-${color}`}
//     >
//       <div className="w-24 h-24 p-2 bg-zinc-50 rounded-3xl border-black border-2">
//         <PaintBrushIcon />
//       </div>
//       <h4
//         className={`text-3xl font-extrabold text-${color} dark:text-amber-300`}
//       >
//         {title}
//       </h4>
//       <p className="max-w-md text-lg">{description}</p>
//       {heading && (
//         <h5
//           className={`text-2xl font-extrabold text-${color} border-b-2 border-zinc-300  dark:text-amber-300`}
//         >
//           {heading}
//         </h5>
//       )}
//       {skills && <p className="text-lg">{skills}</p>}
//       <h5
//         className={`text-2xl font-extrabold text-${color} border-b-2 border-zinc-300  dark:text-amber-300`}
//       >
//         Tools Used
//       </h5>
//       <ul className="flex flex-col space-y-2">
//         {tools.map((tool) => (
//           <li className="text-lg">{tool}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SkillCard;
