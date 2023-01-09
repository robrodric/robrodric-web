import { useState } from 'react'
import './styles.css'

function AboutMe() {
  const [count, setCount] = useState(0)

  return (
    <div className="aboutme hidden">
      <div className="texts">
        <h1>Sobre Mim</h1>
        </div>
      <div className="box">
        <h2>Informações</h2>
        <h4>Meu nome é Roberto, mais conhecido como robrodric.</h4>
        <h4>Tenho 16 anos, e espero ter um futuro incrível.</h4>
        <h4>Nas horas vagas faço bots e sites</h4>
      </div>
      <div className="box">
        <h2>Curiosidades</h2>
        <h4>Cor Favorita: <span>#005fff</span></h4>
        <h4>Estou na 3 série do ensino médio.</h4>
        <h4>Tenho irmão gêmeo.</h4>
      </div>
    </div>
  )
}

export default AboutMe
