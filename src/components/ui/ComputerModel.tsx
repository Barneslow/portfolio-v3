"use-client";

import { FC, Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

interface ComputerModelProps {}

const ComputerModel: FC<ComputerModelProps> = ({}) => {
  // const computer = useGLTF("./gaming_desktop_pc.glb");
  const computer = useGLTF("./voxel_web_development.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={computer.scene} scale={1} position={[0, -2.25, 2]} />
    </mesh>
  );
};

const ComputerModelCanvas = () => {
  return (
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
  );
};

export default ComputerModelCanvas;
