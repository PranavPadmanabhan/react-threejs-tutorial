import { OrbitControls } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import { TextureLoader } from 'three'

const Three = () => {

  const texture = useLoader(TextureLoader, 'photo.jpg')
  const cameraControlRef = useRef()
  const planeRef = useRef();

  useFrame((state) => {
    if(window.innerWidth>600){
      if(planeRef.current){
        planeRef.current.rotation.y = -state.mouse.x * 4;
        planeRef.current.rotation.z = -state.mouse.y;
       }
    }
  })




  return (
    <>
      <ambientLight args={['#ffffff', 1]}/>
      <perspectiveCamera args={[75, window.innerWidth/window.innerHeight,0.1,1000]}/>
      <OrbitControls ref={cameraControlRef} enableDamping/>
      <mesh ref={planeRef}>
        <boxBufferGeometry args={[2,2,2,32,32,32]}/>
        <meshBasicMaterial map={texture}/>
      </mesh>
    </>
  )
}

export default Three