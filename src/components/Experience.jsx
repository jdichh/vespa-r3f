import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Model } from "./Model";
import Overlay from "./Overlay";

export default function Experience() {
  return (
    <>
      <OrbitControls enableRotate={false} enableZoom={false} enablePan={false}/>
      <ambientLight intensity={1.6} />
      <directionalLight
        position={[0, 1, 0]}
        intensity={2}
        castShadow
        shadow-bias={-0.00012}
        shadow-mapSize={[1024, 1024]}
      />
      <ScrollControls pages={7} damping={0.3}>
        <Overlay />
        <Model />
      </ScrollControls>

    </>
  );
}
