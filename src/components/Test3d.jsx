import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
const Test3d = () => {
  return (
    <section style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
           <Canvas>
            <mesh>
                <Sphere args={[1, 50, 100]} scale={2.4}>
                     <MeshDistortMaterial color='#DB8B9B'  attach='material' distort={0.5} speed={3}/>
                </Sphere>
                <ambientLight intensity={0.2} />
                <directionalLight color="red" position={[2,2,0,2]} />
                <OrbitControls/>
            </mesh>
           </Canvas>
    </section>
  )
}

export default Test3d;