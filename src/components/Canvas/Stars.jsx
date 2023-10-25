import { useState, useRef, Suspense, useEffect } from "react";
import { cn } from "@/lib/utils.js";
import PropTypes from "prop-types";
import * as random from "maath/random/dist/maath-random.esm";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { useCurrentTheme } from "@/hooks/get-theme.js";

const Stars = (props) => {
  const [particleColor, setParticleColor] = useState("#f272c8");
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));
  const currentTheme = useCurrentTheme();

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  useEffect(() => {
    if (currentTheme === "light") setParticleColor("#000");
    else if (currentTheme === "dark") setParticleColor("#f272c8");
  }, [currentTheme]);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={particleColor}
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = ({ className }) => {
  return (
    <div className={cn("absolute inset-0 z-[-1] h-full w-full", className)}>
      <Canvas
        camera={{
          position: [0, 0, 1]
        }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;

StarsCanvas.propTypes = {
  className: PropTypes.string
};
