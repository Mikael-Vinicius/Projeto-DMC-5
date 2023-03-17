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
                <h2 className='texto'>Bem-vindo(a) ao Site Do Devil May Cry 5 </h2>
                <p className='texto'>Este site é dedicado a tudo relacionado ao jogo Devil May Cry 5, incluindo informações sobre os personagens, armas e muito mais. Navegue pelo menu acima para encontrar o que você procura.</p>
            </main>
        </div>

        <div className='informacoes'>
            <p>A série Devil May Cry possui mais de 16 milhões de vendas em todo o mundo.
O primeiro jogo desta popular série a fazer sua estreia na geração atual, trazendo caos estiloso contra
inimigos diabólicos nas mãos de Devil Hunters com sangue de demônio em suas veias.</p>
        </div>
        <Footer />
        </body>
        </html>
    )
  }
  
  export default Home;
  