import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { ServiceModel } from "./ServiceModel"
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"

const ServiceModelContainer = () => {
  return (
    <Canvas>
        <Suspense fallback='Loading...'>
            <Stage  environment='night' intensity={10}>
                <ServiceModel/>
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
            <PerspectiveCamera position={[0,-1,2]} zoom={0.7} makeDefault/>
        </Suspense>
    </Canvas>
  )
}

export default ServiceModelContainer