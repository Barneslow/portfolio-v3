"use-client";

import { motion } from "framer-motion";

export function PaintBrushIcon() {
  return (
    <motion.svg viewBox="0 0 347.523 347.523">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        stroke="black"
        fill="green"
        strokeWidth={10}
        transition={{
          duration: 1.5,
          type: "tween",
          ease: "easeOut",
        }}
        d="M108.674,196.125c-2.857-0.402-5.777-0.592-8.746-0.534c-14.267,0.278-36.342,6.092-60.493,32.207
        c-19.171,20.729-19.954,42.635-20.644,61.961c-0.66,18.474-1.181,33.065-16.507,43.727c-1.506,1.049-2.318,2.837-2.113,4.661
        c0.128,1.147,0.645,2.191,1.434,2.98c0.466,0.466,1.026,0.843,1.658,1.099c28.523,11.553,77.316,5.895,117.044-33.833
        c18.043-18.044,28.812-37.145,31.14-55.233c0.607-4.719,0.618-9.323,0.091-13.763L108.674,196.125z M100.915,229.382
        c-1.553,2.174-3.859,3.612-6.494,4.052c-19.209,3.202-25.884,15.953-26.159,16.494c-1.627,3.387-5.167,5.611-8.989,5.611
        c-0.337,0-0.676-0.017-1.015-0.052c-1.149-0.117-2.264-0.432-3.313-0.936c-4.97-2.391-7.069-8.376-4.681-13.347
        c0.442-0.918,11.153-22.546,40.869-27.5c0.546-0.09,1.1-0.136,1.647-0.136c4.908,0,9.055,3.516,9.861,8.357
        C103.08,224.559,102.467,227.207,100.915,229.382z"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        stroke="black"
        fill="green"
        strokeWidth={10}
        transition={{
          duration: 2,
          type: "tween",
          ease: "easeOut",
        }}
        d="M340.587,6.796c-8.615-8.614-22.425-9.1-31.624-1.112c-5.782,5.021-141.818,123.166-160.166,141.513
        c-9.175,9.175-20.946,24.898-31.124,39.428l42.864,43.271c14.546-10.18,30.345-22.003,39.65-31.308
        C218.749,180.024,336.69,44.193,341.703,38.42C349.688,29.22,349.201,15.41,340.587,6.796z"
      />
    </motion.svg>
  );
}

export function CodeIcon() {
  return (
    <motion.svg viewBox="0 0 32 32">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        stroke="black"
        fill="blue"
        strokeWidth={0.5}
        transition={{
          duration: 1.5,
          type: "tween",
          ease: "easeOut",
        }}
        d="M7.11,23.52l1.42-1.41C5.14,18.72,3.37,17,2.39,16L8.53,9.89A1,1,0,1,0,7.11,8.47L.29,15.29A1.05,1.05,0,0,0,0,16a1,1,0,0,0,.3.71Z"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        stroke="black"
        fill="blue"
        strokeWidth={0.5}
        transition={{
          duration: 1.5,
          type: "tween",
          ease: "easeOut",
        }}
        d="M31.71,15.29c-.1-.09-6.82-6.82-6.82-6.82L23.48,9.89c3.38,3.38,5.15,5.16,6.13,6.09l-6.13,6.13a1,1,0,0,0,.7,1.71,1,1,0,0,0,.71-.3l6.82-6.81A1,1,0,0,0,32,16,1,1,0,0,0,31.71,15.29Z"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        stroke="black"
        fill="blue"
        strokeWidth={0.5}
        transition={{
          duration: 2,
          type: "tween",
          ease: "easeOut",
        }}
        d="M13.27,27.91a1,1,0,0,0,1-.76L19.7,5.33a1,1,0,0,0-1.94-.48L12.3,26.67A1,1,0,0,0,13,27.88,1,1,0,0,0,13.27,27.91Z"
      />
    </motion.svg>
  );
}

export function ChartIcon() {
  return (
    <motion.svg viewBox="0 0 22 22">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        stroke="black"
        fill="red"
        strokeWidth={0.5}
        transition={{
          duration: 1.5,
          type: "tween",
          ease: "easeOut",
        }}
        d="M2 2H4V18H20V20H2V2M6 16V8H10V16H6M11 16V4H15V16H11M16 16V11H20V16H16Z"
      />
    </motion.svg>
  );
}
