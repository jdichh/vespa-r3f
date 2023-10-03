import React from "react";
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three"

export default function App() {
  return (
    <Canvas
      camera={{ fov: 20, position: [3, 1, 3] }}
      shadows
      gl={{
        alpha: true,
        shadowMap: {
          enabled: true,
          type: THREE.PCFSoftShadowMap,
        },
      }}
    >
      <Experience />
    </Canvas>
  );
}
