import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Vespa } from "./Vespa";
import Overlay from "./Overlay";

export default function Experience() {
  return (
    <>
      <OrbitControls enableRotate={false} enableZoom={false}/>
      <ambientLight intensity={1.6} />
      <directionalLight
        position={[0, 1, 0]}
        intensity={1.2}
        castShadow
        shadow-bias={-0.00012}
        shadow-mapSize={[512, 512]}
      />
      <ScrollControls pages={4} damping={0.25}>
        <Overlay />
        <Vespa />
      </ScrollControls>

    </>
  );
}
