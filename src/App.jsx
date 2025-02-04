// import Home from './components/home/Home';
// import Services from './components/services/Services';
// import Portfolio from './components/portfolio/Portfolio';
// import Contact from './components/contact/Contact';
// import Test3d from './components/Test3d';

import { lazy, Suspense } from "react";
import LazyLoad from 'react-lazyload';

const App = () => {
  const Home = lazy(() => import('./components/home/Home'));
  const Services = lazy(() => import("./components/services/Services"));
  const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
  const Contact = lazy(() => import("./components/contact/Contact"));

  return (
    <div className='app_container'>
      <Suspense fallback={'Loading...'}>
        <LazyLoad height={'100vh'} offset={-100}>
          <section id='#home'>
            <Home />
          </section>
        </LazyLoad>
      </Suspense>

      <Suspense fallback={'Loading...'}>
        <LazyLoad height={'100vh'} offset={-100}>
          <section id='#services'>
            <Services />
          </section>
        </LazyLoad>
      </Suspense>

      <Suspense fallback={'Loading...'}>
        <LazyLoad height={'600vh'} offset={-100}>
         {/* <section id='#portfolio'> */}
           <Portfolio />
          {/* </section> */}
        </LazyLoad>
      </Suspense>

      <Suspense fallback={'Loading...'}>
        <LazyLoad height={'100vh'} offset={-100}>
          <section id='#contact'>
            <Contact />
          </section>
        </LazyLoad>
      </Suspense>

      {/* <section>
        <Test3d/>
     </section> */}
    </div>
  )
}

export default App
