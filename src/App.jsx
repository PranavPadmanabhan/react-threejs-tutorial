import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import './App.css'
import Three from './components/Three'

function App() {

  return (
   <Canvas style={{width:'100vw',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <Suspense fallback={null}>
      <Three />
    </Suspense>
   </Canvas>
  )
}

export default App
