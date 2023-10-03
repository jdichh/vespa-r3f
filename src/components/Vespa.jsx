import React, { useRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function Vespa(props) {
  const { nodes, materials } = useGLTF('/vespa.glb')

  const model = useRef()

  useLayoutEffect(() => {
    model.current.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })
  }, [])

  return (
    <group ref={model} {...props} dispose={null}>
      <group scale={0.001}>
        <group rotation={[-Math.PI / 2, 0, -0.25]} position={[0, -300, 0]}>
          <mesh geometry={nodes.Vespa_Main_0.geometry} material={materials.Main} />
          <mesh geometry={nodes.Vespa_Wheel_0.geometry} material={materials.Wheel} />
          <mesh geometry={nodes.Vespa_Glass_0.geometry} material={materials.Glass} />
          <mesh geometry={nodes.Vespa_Light_0.geometry} material={materials.Light} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/vespa.glb')