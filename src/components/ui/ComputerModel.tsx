"use-client";

import { FC, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  AccumulativeShadows,
  RandomizedLight,
} from "@react-three/drei";
import { motion } from "framer-motion";

import { accumulativeContext } from "@react-three/drei";

const Backdrop = () => {
  const shadows = useRef(null!);

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
};
const ComputerModel = () => {
  // const computer = useGLTF("./gaming_desktop_pc.glb");
  const computer = useGLTF("./voxel_web_development.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={computer.scene} scale={1} position={[0, -2, 2]} />
    </mesh>
  );
};

const ComputerModelCanvas = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        duration: 1.5,
        delay: 2,
      }}
      className="relative w-full rounded-full aspect-square overflow-hidden md:w-96"
    >
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [25, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate={true}
          />
          <ComputerModel />
          <Preload all />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default ComputerModelCanvas;
