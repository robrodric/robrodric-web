import { useState } from 'react'
import './styles.css'

function Projects() {
  const [count, setCount] = useState(0)

  return (
    <div className="projects hidden">
      <div className="texts">
        <h1>Projetos</h1>
        </div>
        <div className="box">
          <h2>Sideral</h2>
          <h4>Bot oficial do servidor Sidercord.</h4>
          <ul>
            <li><a href="https://discord.gg/sidercord"><i class="fas fa-link"></i> Link do servidor</a></li>
            <li><a href="https://github.com/robrodric/sideral"><i class="fas fa-link"></i> Repositório</a></li>
          </ul>
        </div>
        <div className="box">
        <h2>Otto</h2>
          <h4>Ele tem alguns comandos de economia.</h4>
          <ul>
            <li><a href="https://github.com/robrodric/otto-bot"><i class="fas fa-link"></i> Repositório</a></li>
          </ul>
        </div>
        <div className="box">
        <h2>GK Bot</h2>
          <h4>Bot utilizado no servidor Gang'zKiil.</h4>
          <ul>
            <li><a href="https://discord.gg/963PrQv6wc"><i class="fas fa-link"></i> Link do servidor</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Projects