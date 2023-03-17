import '../home.css'
import '../footer.css'
import { Link } from 'react-router-dom';
import Header from '../componentes/header';
import Footer from '../componentes/footer';
 const logo = "https://www.seekpng.com/png/full/34-349162_devil-may-cry5-devil-may-cry-5-logo.png"
// const wallpaper = 'https://images4.alphacoders.com/948/948585.png'


function Home() {
    return (
        <html lang="pt-br">
        <head>
            <title>Devil May Cry 5 Site</title>
        </head>
        <body className='homeBackground'>
        <Header/>
        
            
        <div className='descricao'>
            <main>
                <h2 className='texto'>Bem-vindo(a) ao Devil May Cry 5 Site</h2>
                <p className='texto'>Este site é dedicado a tudo relacionado ao jogo Devil May Cry 5, incluindo informações sobre os personagens, armas e muito mais. Navegue pelo menu acima para encontrar o que você procura.</p>
            </main>
        </div>
        <Footer />
        </body>
        </html>
    )
  }
  
  export default Home;
  