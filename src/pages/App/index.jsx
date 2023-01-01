import { useState } from 'react'
import './styles.css'
import Home from '../../components/Home'
import AboutMe from '../../components/AboutMe'
import Community from '../../components/Community'
import Projects from '../../components/Projects'

function App() {
  const [count, setCount] = useState(0)
  function home() {
    const home = document.querySelector('.home');
    const aboutme = document.querySelector('.aboutme');
    const community = document.querySelector('.community');
    const projects = document.querySelector('.projects');
    home.classList.remove('hidden')
    aboutme.classList.add('hidden')
    community.classList.add('hidden')
    projects.classList.add('hidden')
  }

  function aboutme() {
    const home = document.querySelector('.home');
    const aboutme = document.querySelector('.aboutme');
    const community = document.querySelector('.community');
    const projects = document.querySelector('.projects');
    home.classList.add('hidden')
    aboutme.classList.remove('hidden')
    community.classList.add('hidden')
    projects.classList.add('hidden')
  }

  function community() {
    const home = document.querySelector('.home');
    const aboutme = document.querySelector('.aboutme');
    const community = document.querySelector('.community');
    const projects = document.querySelector('.projects');
    home.classList.add('hidden')
    aboutme.classList.add('hidden')
    community.classList.remove('hidden')
    projects.classList.add('hidden')
  }

  function projects() {
    const home = document.querySelector('.home');
    const aboutme = document.querySelector('.aboutme');
    const community = document.querySelector('.community');
    const projects = document.querySelector('.projects');
    home.classList.add('hidden')
    aboutme.classList.add('hidden')
    community.classList.add('hidden')
    projects.classList.remove('hidden')
  }

  // window.addEventListener('keyup', function(e) {
  //   var codigoTecla = e.which || e.keyCode || 0;
  //   var space = codigoTecla == 32;
  //   if (space) alert('O space foi pressionado!');
  // });

  return (
    <div className="app">
        <div className="about" onLoad={home}>
          <Home />
          <AboutMe />
          <Community />
          <Projects />
        </div>
        <div className="botao">
            <ul>
                <li><a href="#" onClick={home}><i className="fas fa-home"></i> Inicio</a></li>
                <li><a href="#" onClick={aboutme}><i className="fas fa-user"></i> Sobre Mim</a></li>
                <li><a href="#" onClick={community}><i className="fas fa-shield"></i> Comunidades</a></li>
                <li><a href="#" onClick={projects}><i className="fas fa-computer"></i> Projetos</a></li>
            </ul>
        </div>
    </div>
  )
}

export default App