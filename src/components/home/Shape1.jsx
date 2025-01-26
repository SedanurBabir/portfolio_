import { MeshDistortMaterial, Sphere } from "@react-three/drei"
const Shape1 = () => {
  return (
    <>
            <Sphere args={[1, 50, 100]} scale={2.4}>
             <MeshDistortMaterial color='#DB8B9B'  attach='material' distort={0.5} speed={3}/>
            </Sphere>
            <ambientLight intensity={0.7} />
            <directionalLight color="blue" position={[2,2,0,2]} />
    </>
  )
}

export default Shape1;