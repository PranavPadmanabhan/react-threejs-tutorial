import { OrbitControls } from '@react-three/drei'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import React, { useRef } from 'react'
import { TextureLoader } from 'three'

const Three = () => {

  const texture1 = useLoader(TextureLoader, 'photo.jpg')
  const texture2 = useLoader(TextureLoader, 'PRANAV.jpg')

  const cameraControlRef = useRef()
  const planeRef = useRef();

  const materials = [
    new THREE.MeshStandardMaterial({map:texture1}),
    new THREE.MeshStandardMaterial({map:texture2}),
    new THREE.MeshStandardMaterial({map:texture1}),
    new THREE.MeshStandardMaterial({map:texture2}),
    new THREE.MeshStandardMaterial({map:texture1}),
    new THREE.MeshStandardMaterial({map:texture2}),
  ]

  const geometry = new THREE.BoxBufferGeometry(2,2,2)

  const { scene } = useThree();
  const mesh = new THREE.Mesh(geometry,materials)
  
  useFrame((state) => {
    if(window.innerWidth>600){
        mesh.rotation.y = -state.mouse.x * 4;
        mesh.rotation.z = -state.mouse.y;
       
    }
  })

  scene.add(mesh)




  return (
    <>
      <ambientLight args={['grey', 1]}/>
      <perspectiveCamera args={[75, window.innerWidth/window.innerHeight,0.1,1000]}/>
      <OrbitControls ref={cameraControlRef} enableDamping/>
      {/* <mesh ref={planeRef}>
        <boxBufferGeometry args={[2,2,2,32,32,32]}/>
        <meshBasicMaterial  map={texture}/>
      </mesh> */}
    </>
  )
}

export default Three