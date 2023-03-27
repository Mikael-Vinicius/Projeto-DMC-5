import React from "react";
import vergilImage from '../imagens/VergilImg.webp'
import logoName from '../imagens/glow3.png'
import Header from "../componentes/header";
import Footer from "../componentes/footer";
import '../Vergil.css'

function VergilPage() {
    return(
        <html>
<head>
    <title>Devil May Cry 5 Site</title>
</head>
<body>
    <Header />
    <div id="vergilBG" className="background">
        <main className="main-content">
        <div className="sideBar">
            <img src={logoName}/>
        </div>
        <div class="container">
            <iframe allowFullScreen width="100%" height="100%" className="video"
                    src="https://www.youtube.com/embed/jl4haCCoSqg">
            </iframe>
        </div>

        <div className="imgContainer">
            <img src={vergilImage}/>
        </div>

       
        </main>

        <section className="informacoesP">
        <div className="descricao"> 
            <p>Nome: Vergil</p>
            <p>Idade: Desconhecida</p>
            <p>Altura: 1,85 cm</p>
            <p>Sexo: Masculino</p>
            <p>Raça: Humano/Demônio</p>
            <p>Profissão: Caçador de Demônios</p>
            <p>Transformação: Devil Trigger</p>
            <p>Linhagem: Sparda</p>
        </div>
        
        <div id="vergilStory" className="historia">
            <h1>História</h1>
            <p>
            Vergil é o irmão gêmeo de Dante e um caçador de demônios meio-humano e meio-demônio. Ele é conhecido por sua personalidade mais séria e focada do que Dante, e por suas habilidades de combate excepcionais. Vergil é obcecado por poder e por se tornar mais forte, e está constantemente em busca de novas maneiras de aumentar sua força.
            </p>
            <div className="logoMusicDiv">
            <p>Musica tema: Bury The Light</p>
            <img className="logoMusic" src="https://akamai.sscdn.co/uploadfile/letras/albuns/9/6/6/3/1089721622662481.jpg"/>
            </div>
        </div>
        </section>
    </div>
    <Footer />
</body>
</html>
    )
}

export default VergilPage;