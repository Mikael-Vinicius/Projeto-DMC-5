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
        <div className='head'>
        <h2 className='texto'>Bem-vindo(a) ao Site Do Devil May Cry 5 </h2>
        </div>
        <div className='descricao1'>
            <main>
                <p className='texto'>Este site é dedicado a tudo relacionado ao jogo Devil May Cry 5, incluindo informações sobre os personagens, armas e muito mais. Navegue pelo menu acima para encontrar o que você procura.</p>
            </main>
        </div>

        <div className='informacoes'>
            <p>A série Devil May Cry possui mais de 16 milhões de vendas em todo o mundo.
O primeiro jogo desta popular série a fazer sua estreia na geração atual, trazendo caos estiloso contra
inimigos diabólicos nas mãos de Devil Hunters com sangue de demônio em suas veias.</p>
        </div>
        <div className='History'>
        <h2 className='texto'>História do Devil May Cry 5</h2>
        </div>
        <div className='descricao2'>
                
                <p className='texto'>Devil May Cry 5 é um jogo de ação e aventura desenvolvido pela Capcom e lançado em março de 2019. A história se passa alguns anos após os eventos de Devil May Cry 4 e segue os caçadores de demônios Dante, Nero e um novo personagem chamado V em sua luta contra um poderoso demônio chamado Urizen.</p>
                <img src='https://images8.alphacoders.com/106/1062289.jpg' alt='Devil May Cry 5 - História' className='imagem'/>
                </div>
                <div className='descricao3'>
                <p className='texto'>Ao longo da história, os jogadores assumem o controle de cada um dos três personagens em missões separadas, que eventualmente se unem em uma batalha final épica contra Urizen. O jogo apresenta gráficos incríveis e uma jogabilidade frenética e cheia de estilo, tornando-se um dos jogos de ação mais populares dos últimos anos.</p>
                <img src='https://images5.alphacoders.com/110/1102238.jpg' alt='Devil May Cry 5 - Dante' className='imagem'/>
                </div>
            
        <Footer />
        </body>
        </html>
    )
  }
  
  export default Home;
  