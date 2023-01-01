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
        <h2></h2>
      </div>
      <div className="box">
        <h2>Curiosidades</h2>
        <h4>Cor Favorita: <span>#005fff</span></h4>
      </div>
    </div>
  )
}

export default AboutMe