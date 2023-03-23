import { FC } from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BMeditation API | Documentation",
  description: "How to use the BMeditation API",
};

const page: FC = () => {
  return (
    <div className="container h-full max-w-7xl mx-auto mt-20 pb-10">
      <div className="flex flex-col items-center gap-6"></div>
    </div>
  );
};

export default page;
