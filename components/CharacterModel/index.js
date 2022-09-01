import {
  OrbitControls,
  OrthographicCamera,
  useGLTF,
  useProgress,
  Html,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { useBreakpointValue } from "@chakra-ui/react";
import { Suspense } from "react";

const CharacterLoader = () => {
  const { progress } = useProgress();
  const loadingPercentage = Math.round(progress);
  return (
    <Html center>
      {loadingPercentage} {"% Loaded"}
    </Html>
  );
};

const Character = ({ url }) => {
  const { scene } = useGLTF(url, true);
  console.log(scene);
  return <primitive object={scene} position={[5, 5, 0]} />;
};

const CharacterLights = () => {
  return (
    <>
      <spotLight intensity={1} position={[-55, 70, 70]} />
      <directionalLight
        color={"purple"}
        intensity={4}
        position={[40, 30, 20]}
      />
      <directionalLight
        color={"blue"}
        intensity={2}
        position={[-35, 40, -10]}
      />
    </>
  );
};

const CharacterModel = () => {
  const cameraZoom = useBreakpointValue({
    base: 6,
    md: 8,
  });
  const rotatingSpeed = -2;
  return (
    <>
      <Canvas>
        <OrbitControls autoRotate autoRotateSpeed={rotatingSpeed} />
        <OrthographicCamera
          makeDefault
          zoom={cameraZoom}
          position={[0, 0, 100]}
        />
        <ambientLight intensity={0.3} />
        <CharacterLights />
        <Suspense fallback={<CharacterLoader />}>
          <Character url={"/model_for_portfolio_06.glb"} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default CharacterModel;
