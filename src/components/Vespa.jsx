import React, { useRef, useLayoutEffect, useState } from "react";
import { useGLTF, useScroll, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import Floor from "./Floor";

export function Vespa(props) {
  const { nodes, materials } = useGLTF("/models/vespa.glb");
  const [initialCamera, setInitialCamera] = useState([4, 1, 4]);

  const model = useRef();
  const camera = useRef();
  const timeLine = useRef();
  const scroll = useScroll();

  useFrame((state, delta) => {
    timeLine.current.seek(scroll.offset * timeLine.current.duration());
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

    // Start from the initial camera position
    timeLine.current.set(camera.current.position, {
      // 1
      x: initialCamera[0],
      y: initialCamera[1],
      z: initialCamera[2],
    });

    timeLine.current.to(camera.current.position, {
      // 2
      duration: 3,
      x: 0.3,
      y: 0.5,
      ease: "Power2.easeInOut",
    });

    // Set the end position of the camera
    timeLine.current.set(camera.current.position, {
      x: 0.3,
      y: 0.5,
    });

    // New timelines
    timeLine.current.to(model.current.rotation, {
      // 3
      duration: 2,
      y: (Math.PI * 2) / 2,
      ease: "Power2.easeInOut",
    });

    timeLine.current.to(model.current.rotation, {
      // 4
      duration: 2,
      y: 0.3,
      ease: "Power2.easeInOut",
    });

    timeLine.current.to(model.current.rotation, {
      // 5
      duration: 2,
      y: 2,
      ease: "Power2.easeInOut",
    });

    // Ensure smooth transitions between animations
    timeLine.current.smoothChildTiming = true;
    timeLine.current.pause();

    const updateCameraPosition = () => {
      if (scroll.offset >= 0 && scroll.offset <= 1) {
        timeLine.current.progress(scroll.offset);
      }
    };

    window.addEventListener("scroll", updateCameraPosition);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", updateCameraPosition);
    };
  }, []);

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={initialCamera}
        fov={20}
        far={10}
        ref={camera}
      />
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
    </>
  );
}

useGLTF.preload("/models/vespa.glb");
