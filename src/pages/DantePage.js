import React from "react";
import logoName from '../imagens/DANTE.png'
import danteImage from '../imagens/Danteimg.png'
import Header from "../componentes/header";
import Footer from "../componentes/footer";
import logoMusic from '../imagens/DMC5_Subhuman.webp'
import '../Dante.css'


function DantePage() {
    return(
        <html lang="pt-br">
        <head>
    <title>Devil May Cry 5 Site</title>
</head>
<body>
    <Header />
    <div id="DanteBG" className="background">
        <main className="main-content">
        <div className="sideBar">
            <img src={logoName}/>
        </div>
    <div class="container">
        
    <iframe allowFullScreen width="100%" height="100%" className="video"
		 src="https://www.youtube.com/embed/2K2642LF5g0">
		
        </iframe>
        </div>

        <div className="imgContainer">
            <img src={danteImage}/>
        </div>
        </main>
        <section className="informacoesP">
        <div className="descricao"> 
        <p>Nome: Dante</p>
        <p>Idade: Desconhecida</p>
        <p>Altura: 1,88 cm</p>
        <p>Sexo: Masculino</p>
        <p>Raça: Humano/Demônio</p>
        <p>Profissão: Caçador de Demônios</p>
        <p>Transformação: Devil Trigger</p>
        <p>Linhagem: Sparda</p>
        </div>
        <div id="danteStory" className="historia">
            <h1>História</h1>
            <p>
            Dante é um dos protagonistas da série Devil May Cry e um caçador de demônios meio-humano e meio-demônio. Ele é filho do lendário cavaleiro das trevas Sparda e da humana Eva, irmão mais velho de Vergil e pai de Nero. Dante é conhecido por sua personalidade excêntrica, bem-humorada e arrogante, além de suas habilidades de combate excepcionais.
            </p>
            <div className="logoMusicDiv">
            <p>Musica tema: SubHuman</p>
            <img className="logoMusic" src={logoMusic}/>
            </div>
        </div>
        </section>
        </div>
   <Footer />
</body>
</html>      
    )
}

export default DantePage