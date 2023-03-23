export const container = {
  initial: {},
  animate: { transition: { staggerChildren: 0.05, delayChildren: 0.3 } },
};

export const child = {
  initial: { opacity: 0, x: -10, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.5, type: "spring", bounce: 0.5 },
  },
};
