import Home from './components/home/Home';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Test3d from './components/Test3d';

const App = () => {
  return (
    <div className='app_container'>
      <section id='#home'>
         <Home />
      </section>
     <section id='#services'>
       <Services />
     </section>
     <section id='#portfolio'>
       <Portfolio />
     </section>
     <section id='#contact'>
       <Contact/>
     </section>
     {/* <section>
        <Test3d/>
     </section> */}
    </div>
  )
}

export default App
