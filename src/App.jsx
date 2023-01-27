import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import './App.scss'

function App() {

  return (
    <div className="App">
      <Topbar />
      <section className='sections'>
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </section>
    </div>
  )
}

export default App
