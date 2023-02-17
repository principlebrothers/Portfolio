import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import './App.scss';
import { Slide } from 'react-reveal';

function App() {
  const [expandMenu, setExpandMenu] = useState(false);
  return (
    <div className='App'>
      <Navbar expandMenu={expandMenu} setExpandMenu={setExpandMenu} />
      <Menu expandMenu={expandMenu} setExpandMenu={setExpandMenu} />
      <section className='sections'>
        <Slide left>
          <Intro />
          <Projects />
          <Skills />
          <Testimonials />
          <Contact />
        </Slide>
      </section>
    </div>
  );
}

export default App;
