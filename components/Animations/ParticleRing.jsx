import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "../../utils/utils";
import { Featured } from "../Products/Featured";

const ParticleRing = (products) => {
    return (
        <div className="relative">
            <Canvas
                camera={{
                    position: [10, -7.5, -5],
                }}
                style={{ height: "100vh" }}
                className="bg-[#E56B6F]"
            >
                <OrbitControls maxDistance={20} minDistance={10} />
                <directionalLight />
                <pointLight position={[-30, 0, -30]} power={10.0} />
                <PointCircle />
            </Canvas>

            <div className="absolute top-[60%] md:top-[60%] lg:top-[75%] 2xl:top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
                <Featured product={products} />
            </div>
        </div>
    );
};

const PointCircle = () => {
    const ref = useRef(null);

    useFrame(({ clock }) => {
        if (ref.current?.rotation) {
            ref.current.rotation.z = clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <group ref={ref}>
            {pointsInner.map((point) => (
                <Point key={point.idx} position={point.position} color={"#355070"} />
            ))}
            {pointsOuter.map((point) => (
                <Point key={point.idx} position={point.position} color={"#355070"} />
            ))}
        </group>
    );
};

const Point = ({ position, color }) => {
    return (
        <Sphere position={position} args={[0.1, 10, 10]}>
            <meshStandardMaterial
                emissive={color}
                emissiveIntensity={0.5}
                roughness={0.5}
                color={color}
            />
        </Sphere>
    );
};

export default ParticleRing;