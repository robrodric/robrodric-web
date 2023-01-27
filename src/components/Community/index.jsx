import { useState } from 'react'
import './styles.css'

function Community() {
  const [count, setCount] = useState(0)

  return (
    <div className="community hidden">
      <div className="texts">
        <h1>Comunidades</h1>
        </div>
        <div className="box">
          <h2>Sidercord</h2>
          <p>Administrador & Developer</p>
          <h4>Servidor oficial do youtuber e músico SrSider. Feito para produtores musicais ou para pessoas que querem bater um papo.</h4>
          <ul>
            <li><a href="https://discord.gg/sidercord"><i class="fas fa-link"></i> Link</a></li>
          </ul>
        </div>
        <div className="box">
          <h2>Robrocord</h2>
          <p>Dono & Developer</p>
          <h4>Servidor oficial do robrodric, aqui você pode interagir, tirar dúvidas e encontrar novos amigos.</h4>
          <ul>
            <li><a href="https://discord.gg/MDt3vM3"><i class="fas fa-link"></i> Link</a></li>
          </ul>
        </div>
        <div className="box">
          <h2>&lt;CodeLab/&gt;</h2>
          <p>Dono & Developer</p>
          <h4>Servidor com foco no mundo tecnológico em que vivemos.</h4>
          <ul>
            <li><a href="https://discord.gg/rgqPnU534C"><i class="fas fa-link"></i> Link</a></li>
          </ul>
        </div>
        <div className="box">
          <h2>GK</h2>
          <p>Developer</p>
          <h4>Olá, Bem vindo(a), a GK, um servidor aconchegante.</h4>
          <ul>
            <li><a href="https://discord.gg/963PrQv6wc"><i class="fas fa-link"></i> Link</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Community
