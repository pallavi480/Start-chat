import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import { Mesh } from 'three'

const RotatingBox: React.FC = () => {
  const ref = useRef<Mesh | null>(null)
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.6
      ref.current.rotation.y += delta * 0.8
    }
  })

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[1.8, 1.1, 0.18]} />
      <meshStandardMaterial metalness={0.35} roughness={0.2} color="royalblue" />
      <Html position={[0, 0, 0.12]} center>
        <div className="backdrop-blur-sm bg-black bg-opacity-40 px-3 py-1 rounded text-white text-sm">
          3D-like Card
        </div>
      </Html>
    </mesh>
  )
}

export default function ThreeCard(): JSX.Element {
  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <div className="rounded-2xl overflow-hidden shadow-2xl">
        <Canvas style={{ height: 440 }} camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <RotatingBox />
          <OrbitControls enablePan={false} enableZoom={true} />
        </Canvas>
      </div>
    </div>
  )
}
