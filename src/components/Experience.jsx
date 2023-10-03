import { OrbitControls, Box, ScrollControls } from "@react-three/drei";
import { Vespa } from "./Vespa";
import Floor from "./Floor";

export default function Experience() {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={1.6} />
      <directionalLight
        position={[0, 1, 0]}
        intensity={1.2}
        castShadow
        shadow-bias={-0.00012}
        shadow-mapSize={[512, 512]}
      />
      <Floor />
      <Vespa />
    </>
  );
}
