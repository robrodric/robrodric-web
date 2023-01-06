import { useState } from 'react'
import './styles.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="home">
      <div className='texts'>
        <h1>robrodric</h1>
        <h3>Front-end Developer</h3>
        </div>
        <div className="skills">
        <div className="box">
        <h2>Habilidades</h2>
        <ul className="home-div">
          <li><i className="fa-brands fa-square-js icon"></i></li>
          <li><i className="fa-brands fa-node-js icon"></i></li>
          <li><i className="fa-brands fa-js icon"></i></li>
          <li><i className="fa-brands fa-react icon"></i></li>
        </ul>
        </div>
        <div className="box">
        <h2>Contato</h2>
        <ul className="home-div">
          <li><a href="https://twitter.com/robrodric"><i className="fa-brands fa-twitter icon"></i></a></li>
          <li><a href="https://discord.com/users/655176205171163138"><i className="fa-brands fa-discord icon"></i></a></li>
          <li><a href="https://github.com/robrodric"><i className="fa-brands fa-github icon"></i></a></li>
          <li><a href="mailto:robrodric.contato@gmail.com"><i className="fas fa-envelope icon"></i></a></li>
        </ul>
        </div>
        <div className="box">
        <h2>Redes Sociais</h2>
        <ul className="home-div">
          <li><a href="https://instagram.com/robrodric_"><i className="fa-brands fa-instagram icon"></i></a></li>
          <li><a href="https://discord.com/users/655176205171163138"><i className="fa-brands fa-discord icon"></i></a></li>
          <li><a href="https://tiktok.com/robrodric"><i className="fa-brands fa-tiktok icon"></i></a></li>
          <li><a href="https://twitch.tv/robrodric"><i className="fa-brands fa-twitch icon"></i></a></li>
          <li><a href="https://youtube.com/c/robrodric"><i className="fa-brands fa-youtube icon"></i></a></li>
        </ul>
        </div>
        </div>
    </div>
    
  )
}

export default Home
