/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, {useRef} from 'react';
import {useGLTF} from '@react-three/drei/native';

export default function Model(props:any) {
  const {nodes, materials}:any = useGLTF(require('./iphone.glb'));
  return (
    <group {...props} dispose={null} scale={1.0}>
      <group
        position={[-0.005, -0.034, 0.111]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0.geometry}
          material={materials['Mat.10']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_1.geometry}
          material={materials['Mat.2']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_2.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_3.geometry}
          material={materials['Mat.1']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_4.geometry}
          material={materials['Mat.6_2_1']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_5.geometry}
          material={materials['Mat.6']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_6.geometry}
          material={materials.Mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_7.geometry}
          material={materials['Material.011']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_8.geometry}
          material={materials['Material.010']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_9.geometry}
          material={materials['Mat.7']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_10.geometry}
          material={materials['Mat.6_1']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_11.geometry}
          material={materials['Mat.5']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_12.geometry}
          material={materials['default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_13.geometry}
          material={materials['Mat.6_2']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_14.geometry}
          material={materials['Mat.9']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_15.geometry}
          material={materials['Mat.8']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_16.geometry}
          material={materials['Mat.6_2.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_17.geometry}
          material={materials['Mat.003']}
        />
      </group>
      <group
        position={[-0.005, -0.034, 0.111]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_38.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_38_1.geometry}
          material={materials['Mat.10']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screen.geometry}
        material={materials['Mat.003']}
        position={[-0.005, -0.034, 0.111]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}

// useGLTF.preload('/iphone.glb')