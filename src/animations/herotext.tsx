export const container = {
  initial: {},
  animate: { transition: { staggerChildren: 0.3, delayChildren: 1 } },
};

export const child = {
  initial: { opacity: 0, x: -100, y: -10 },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.5, type: "spring", bounce: 0.4 },
  },
};
