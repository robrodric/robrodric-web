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
        <ul>
          <li><i className="fa-brands fa-node-js"></i> Node.js</li>
          <li><i className="fa-brands fa-js"></i> Javacript</li>
          <li><i className="fa-brands fa-discord"></i> Discord.js</li>
          <li><i className="fa-brands fa-react"></i> React.js</li>
        </ul>
        </div>
        <div className="box">
        <h2>Contato</h2>
        <ul>
          <li><a href="https://twitter.com/robrodric"><i className="fa-brands fa-twitter"></i></a></li>
          <li><a href="https://discord.com/users/655176205171163138"><i className="fa-brands fa-discord"></i></a></li>
          <li><a href="https://github.com/robrodric"><i className="fa-brands fa-github"></i></a></li>
          <li><a href="mailto:robrodric.contato@gmail.com"><i className="fas fa-envelope"></i></a></li>

        </ul>
        </div>
        </div>
    </div>
    
  )
}

export default Home