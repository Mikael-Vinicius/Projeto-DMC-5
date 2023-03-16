import VergilImg from '../imagens/VergilTest.png'
import vImage from "../imagens/Vimage.png"
import DanteImg from "../imagens/DanteimgEdit.png"
import NeroEdit from '../imagens/neroEdit.png'
import logo from '../logo.svg';
import '../personagens.css';

function Personagens() {
    return (
      <html lang="pt-br">
      <head>
          <meta charSet="UTF-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      
          <title>DMC 5</title>
      
          <link rel="stylesheet" href="App.css"/>
      </head>
      <body>
          <div id="characters-box">
              <ul id="characters-list">
                  <li id='NeroColor'className="transform: translate(0px, 0px); opacity: 1;">
                      <a href='' style={{backgroundImage: `url(${NeroEdit})`}}>
                          <span>NERO</span>
                      </a>
                  </li>
                  <li id="DanteColor" className="transform: translate(0px, 0px); opacity: 1;">
                      <a href="" style={{backgroundImage: `url(${DanteImg})`}}>
                          <span>DANTE</span>
                      </a>
                  </li>
                  <li id="VColor" className="transform: translate(0px, 0px); opacity: 1;">
                      <a href="" style={{backgroundImage: `url(${vImage})`}}>
                          <span>V</span>
                      </a>
                  </li>
                  <li id="VergilColor" className="transform: translate(0px, 0px); opacity: 1;">
                      <a href="" style={{backgroundImage: `url(${VergilImg})`}}>
                          <span>VERGIL</span>
                      </a>
                  </li>
              </ul>
          </div>
          <script src="./src/js/index.js"></script>
      </body>
      </html>
    );
  }
  
  export default Personagens;