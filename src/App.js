import logo from './logo.svg';
import './App.css';
import logoGitHub from './imagens/github.svg'
import logoLinkedIn from './imagens/linkedin-in.svg'
import VergilImg from './imagens/VergilImg.webp'
import vImage from "./imagens/Vimage.png"
import DanteImg from "./imagens/Danteimg.png"

const neroImage = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f3810965-d444-49fe-860e-ea51d4e13361/dcws2a3-4760284d-904d-4cea-ad2a-cdda3443474d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YzODEwOTY1LWQ0NDQtNDlmZS04NjBlLWVhNTFkNGUxMzM2MVwvZGN3czJhMy00NzYwMjg0ZC05MDRkLTRjZWEtYWQyYS1jZGRhMzQ0MzQ3NGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NRxPCc4bmDhdzNIzdYCz1GPlT4-Vlkc5zm0mC67GGTE"
function App() {
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
                <li className="transform: translate(0px, 0px); opacity: 1;">
                    <a href='' style={{backgroundImage: `url(${neroImage})`}}>
                        <span>NERO</span>
                    </a>
                </li>
                <li className="transform: translate(0px, 0px); opacity: 1;">
                    <a href="" style={{backgroundImage: `url(${DanteImg})`}}>
                        <span>DANTE</span>
                    </a>
                </li>
                <li className="transform: translate(0px, 0px); opacity: 1;">
                    <a href="" style={{backgroundImage: `url(${vImage})`}}>
                        <span>V</span>
                    </a>
                </li>
                <li className="transform: translate(0px, 0px); opacity: 1;">
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

export default App;
