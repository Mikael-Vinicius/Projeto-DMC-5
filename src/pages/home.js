import '../home.css'
import Personagens from './personagens';
import { Link } from 'react-router-dom';
 const logo = "https://vgboxart.com/resources/logo/15993_devil-may-cry-5-prev.png"
// const wallpaper = 'https://images4.alphacoders.com/948/948585.png'


function Home() {
    return (
        <html lang="pt-br">
        <head>
            <title>Devil May Cry 5 Site</title>
        </head>
        <body>
            <header>
                <nav>
                    <ul className='header'>
                        <img className='logo' src={logo}/>
                        <li><a href="#">Home</a></li>
                        <li><Link to="personagens">Personagens</Link></li>
                        <li><a href="#">Armas</a></li>
                    </ul>
                </nav>
            </header>
        
            <main>
                <h2 className='texto'>Bem-vindo(a) ao Devil May Cry 5 Site</h2>
                <p className='texto'>Este site é dedicado a tudo relacionado ao jogo Devil May Cry 5, incluindo informações sobre os personagens, armas e muito mais. Navegue pelo menu acima para encontrar o que você procura.</p>
            </main>
        
            <footer>
                <p>&copy; 2023 Devil May Cry 5 Site</p>
            </footer>
        </body>
        </html>
    )
  }
  
  export default Home;
  