import {
  OrbitControls,
  OrthographicCamera,
  useGLTF,
  useHelper,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { DirectionalLightHelper, SpotLightHelper } from "three";

const Phone = ({ URL }) => {
  const { scene } = useGLTF(URL, true);
  //   console.log(scene);
  return <primitive object={scene} scale={2.5} />;
};

const PhoneLights = () => {
  const spotLightHelperRef = useRef();
  const directionalLightHelperRef = useRef();
  const secondaryDirectionalLightHelperRef = useRef();

  useHelper(spotLightHelperRef, SpotLightHelper, "green");
  useHelper(directionalLightHelperRef, DirectionalLightHelper, 8);
  useHelper(secondaryDirectionalLightHelperRef, DirectionalLightHelper, 6);

  return (
    <>
      <spotLight
        //    ref={spotLightHelperRef}
        intensity={1}
        position={[0, 5, 0]}
      />
      <directionalLight
        // ref={directionalLightHelperRef}
        color={"blue"}
        intensity={2}
        position={[0, 8, 8]}
      />
      <directionalLight
        // ref={secondaryDirectionalLightHelperRef}
        color={"purple"}
        intensity={2}
        position={[0, 8, -8]}
      />
    </>
  );
};

const PhoneModel = () => {
  return (
    <>
      <Canvas>
        <OrbitControls autoRotate autoRotateSpeed={-2.5} />
        <OrthographicCamera />
        <ambientLight intensity={0.8} />
        <PhoneLights />
        <Suspense fallback={null}>
          <Phone URL={"/iPhone_Base_01.glb"} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default PhoneModel;
