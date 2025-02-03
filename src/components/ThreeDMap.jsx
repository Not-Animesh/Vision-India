import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function ThreeDMap() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </Canvas>
  );
}

export default ThreeDMap;
