import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Projects from './components/projects/Projects';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu'
import './App.scss';

function App() {
  const [expandMenu, setExpandMenu] = useState(false);
  return (
    <div className='App'>
      <Navbar expandMenu={expandMenu} setExpandMenu={setExpandMenu} />
      <Menu expandMenu={expandMenu} setExpandMenu={setExpandMenu} />
      <section className='sections'>
        <Intro />
        <Projects />
        <Works />
        <Testimonials />
        <Contact />
      </section>
    </div>
  );
}

export default App;
