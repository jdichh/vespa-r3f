import React, { useRef, useLayoutEffect, useState } from "react";
import { useGLTF, useScroll, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import Floor from "./Floor";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/vespa.glb");
  const [initialCamera, setInitialCamera] = useState([0, 0.1, 10]);

  const model = useRef();
  const camera = useRef();
  const timeLine = useRef();
  const scroll = useScroll();

  // With rotation
  // useFrame((state, delta) => {
  //   timeLine.current.seek(scroll.offset * timeLine.current.duration());
  //   model.current.rotation.y += delta / 6;
  // });

  // No rotation
  useFrame(() => {
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

    timeLine.current.set(camera.current.position, {
      x: initialCamera[0],
      y: initialCamera[1],
      z: initialCamera[2],
      ease: "Power2.easeInOut",
    });

    // Section 1
    timeLine.current
      .to(
        model.current.rotation,
        {
          duration: 2,
          y: Math.PI * 1.7,
          ease: "Power2.easeInOut",
        },
        2
      )
      .to(
        model.current.position,
        {
          duration: 2,
          x: 0.1,
          y: -0.05,
          z: 0,
          ease: "Power2.easeInOut",
        },
        2
      )
      .to(
        camera.current.position,
        {
          duration: 2,
          x: 0,
          y: 0,
          z: 7,
          ease: "Power2.easeInOut",
        },
        2
      )
      .to(
        model.current.rotation,
        {
          duration: 2,
          x: 0.1,
          z: 0.12,
          ease: "Power2.easeInOut",
        },
        2
      );

    // Section 2
    timeLine.current
      .to(
        model.current.position,
        {
          duration: 2,
          x: -0.1,
          ease: "Power2.easeInOut",
        },
        4
      )
      .to(
        model.current.rotation,
        {
          duration: 2,
          y: Math.PI * 0.65,
          z: -0.1,
          ease: "Power2.easeInOut",
        },
        4
      )
      .to(
        camera.current.position,
        {
          duration: 2,
          y: 0,
          z: 7,
          ease: "Power2.easeInOut",
        },
        4
      );

    // Section 3
    timeLine.current
      .to(
        model.current.position,
        {
          duration: 2,
          x: 0,
          y: -0.2,
          z: 0,
          ease: "Power2.easeInOut",
        },
        6
      )
      .to(
        model.current.rotation,
        {
          duration: 2,
          x: 0.1,
          y: 0,
          z: 0,
          ease: "Power2.easeInOut",
        },
        6
      )
      .to(
        camera.current.position,
        {
          duration: 2,
          z: 9.5,
          ease: "Power2.easeInOut",
        },
        6
      );

    // Section 4
    timeLine.current
      .to(
        model.current.rotation,
        {
          duration: 2,
          x: 0,
          y: 0.3,
          z: -0.1,
          ease: "Power2.easeInOut",
        },
        8
      )
      .to(
        model.current.position,
        {
          duration: 2,
          x: 0.2,
          y: 0.02,
          ease: "Power2.easeInOut",
        },
        8
      )
      .to(
        camera.current.position,
        {
          duration: 2,
          y: 0,
          z: 3,
          ease: "Power2.easeInOut",
        },
        8
      );

    timeLine.current
      .to(
        model.current.rotation,
        {
          duration: 2,
          x: -0.01,
          y: -0.9,
          ease: "Power2.easeInOut",
        },
        10
      )
      .to(
        model.current.position,
        {
          duration: 2,
          x: -0.05,
          y: -0.05,
          ease: "Power2.easeInOut",
        },
        10
      )
      .to(
        camera.current.position,
        {
          duration: 2,
          z: 8,
          ease: "Power2.easeInOut",
        },
        10
      );

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
        fov={8}
        far={90}
        ref={camera}
      />
      <group ref={model} {...props} dispose={null} rotation={[0, -1, 0]}>
        <Floor />
        <group scale={0.001}>
          <group rotation={[-1.57, 0, 0]} position={[0, -302, 0]}>
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
