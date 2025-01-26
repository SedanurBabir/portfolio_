import { MeshDistortMaterial, Sphere } from "@react-three/drei"
const Shape2 = () => {
  return (
    <>
            <Sphere args={[0.7, 20, 70]} scale={2}>
             <MeshDistortMaterial color='#DB8B9B'  attach='material' distort={1} speed={1}/>
            </Sphere>
            <ambientLight intensity={1} />
            <directionalLight color="red" position={[2,2,0,2]} />
    </>
  )
}

export default Shape2;