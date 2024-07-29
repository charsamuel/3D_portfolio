import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

// Importing 'maath' for random positions
import * as random from "maath/random/dist/maath-random.esm";

// Function to generate random positions in a sphere as a fallback
const generateRandomPositions = (count, radius) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }
  return positions;
};

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => {
    try {
      const positions = random.inSphere(new Float32Array(5000), {
        radius: 1.2,
      });
      // Check for NaN values
      for (let i = 0; i < positions.length; i += 3) {
        if (
          isNaN(positions[i]) ||
          isNaN(positions[i + 1]) ||
          isNaN(positions[i + 2])
        ) {
          console.error(
            `Invalid position at index ${i / 3}: (${positions[i]}, ${
              positions[i + 1]
            }, ${positions[i + 2]})`
          );
          positions[i] = 0;
          positions[i + 1] = 0;
          positions[i + 2] = 0;
        }
      }
      return positions;
    } catch (error) {
      console.error("Error generating positions with maath:", error);
      // Fallback to generate random positions manually
      return generateRandomPositions(5000, 1.2);
    }
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
