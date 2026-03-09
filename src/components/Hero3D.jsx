import { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Particles({ count = 300 }) {
  const points = useRef()
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [count])

  useFrame((state) => {
    points.current.rotation.y = state.clock.getElapsedTime() * 0.02
    points.current.rotation.x = state.clock.getElapsedTime() * 0.01
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#22d3ee"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function AnimatedGeometry() {
  const meshRef = useRef()
  const innerRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.y = t * 0.12
    meshRef.current.rotation.x = Math.sin(t * 0.25) * 0.15
    meshRef.current.rotation.x += state.pointer.y * 0.08
    meshRef.current.rotation.z = state.pointer.x * 0.08

    innerRef.current.rotation.y = -t * 0.08
    innerRef.current.rotation.x = Math.cos(t * 0.2) * 0.1
  })

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={1.5}>
      <group>
        {/* Wireframe outer shell */}
        <mesh ref={meshRef} scale={2.4}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#22d3ee"
            wireframe
            distort={0.2}
            speed={2}
            transparent
            opacity={0.5}
          />
        </mesh>

        {/* Glowing inner core */}
        <mesh ref={innerRef} scale={1.6}>
          <icosahedronGeometry args={[1, 4]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.4}
            transparent
            opacity={0.12}
          />
        </mesh>

        {/* Bright center point */}
        <mesh scale={0.15}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.8} />
        </mesh>
      </group>
    </Float>
  )
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark pointer-events-none z-10" />
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <color attach="background" args={['#030014']} />
          <fog attach="fog" args={['#030014', 8, 20]} />
          <ambientLight intensity={0.15} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#06b6d4" />
          <pointLight position={[-10, -5, -10]} intensity={0.8} color="#8b5cf6" />
          <pointLight position={[0, -10, 5]} intensity={0.3} color="#22d3ee" />
          <AnimatedGeometry />
          <Particles />
        </Canvas>
      </Suspense>
    </div>
  )
}
