// I, the creator of this project, am NOT in any way affiliated with
// Vespa. This is just a PERSONAL PROJECT.

import React from "react";
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

export default function App() {
  return (
    <>
      <Canvas
        shadows
        gl={{
          alpha: true,
          shadowMap: {
            enabled: true,
            type: THREE.PCFSoftShadowMap,
          },
          outputColorSpace: THREE.SRGBColorSpace,
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
      >
        <Experience />
      </Canvas>
    </>
  );
}
