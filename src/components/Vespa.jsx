import React, { useRef, useLayoutEffect } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import Floor from "./Floor";

export function Vespa(props) {
  const { nodes, materials } = useGLTF("/models/vespa.glb");

  const model = useRef();
  const timeLine = useRef();
  const scroll = useScroll();

  useFrame((state, delta) => {
    timeLine.current.seek(scroll.offset * timeLine.current.duration());
    model.current.rotation.y += delta / 4;
  });

  useLayoutEffect(() => {
    // Enabling shadows for each mesh of the model
    model.current.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    // GSAP Setup
    timeLine.current = gsap.timeline();

    timeLine.current.from(
      model.current.position,
      {
        duration: 2,
        y: -5,
      },
      0
    );
  }, []);

  return (
    <group ref={model} {...props} dispose={null} rotation={[0, 0, 0]}>
      <Floor />
      <group scale={0.001}>
        <group rotation={[-1.5, 0, 0]} position={[0, -300, 0]}>
          <mesh
            geometry={nodes.Vespa_Main_0.geometry}
            material={materials.Main}
          />
          <mesh
            geometry={nodes.Vespa_Wheel_0.geometry}
            material={materials.Wheel}
          />
          <mesh
            geometry={nodes.Vespa_Glass_0.geometry}
            material={materials.Glass}
          />
          <mesh
            geometry={nodes.Vespa_Light_0.geometry}
            material={materials.Light}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/vespa.glb");
