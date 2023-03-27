import React from "react";
import '../header.css'
import '../characterPage.css'
import logoName from '../imagens/glow.png'
import neroImage from '../imagens/NeroImage2.png'
import { Link } from 'react-router-dom';
import Header from "../componentes/header";
import Footer from "../componentes/footer";
import logoMusic from '../imagens/DMC5_Devil_Trigger.webp'

 const logo = "https://www.seekpng.com/png/full/34-349162_devil-may-cry5-devil-may-cry-5-logo.png"
function NeroPage() {
    return(
        <html lang="pt-br">
<head>
    <title>Devil May Cry 5 Site</title>
</head>
<body>
    <Header />
    <div className="background">
    <main className="main-content">
    <div className="sideBar">
            <img src={logoName}/>
        </div>
    <div class="container">
    <iframe allowFullScreen width="100%" height="100%" className="video"
		 src="https://www.youtube.com/embed/yX5x-Ne6RdQ">
		
        </iframe>
        </div>

       
       

        
        <div className="imgContainer">
            <img src={neroImage}/>
        </div>
        </main>
        <section className="informacoesP">
        <div className="descricao"> 
        <p>Nome: Nero</p>
        <p>Idade: 24</p>
        <p>Altura: 1,70 cm</p>
        <p>Sexo: Masculino</p>
        <p>Raça Humano/Demônio</p>
        <p>Profissão: Caçador de Demônios</p>
        <p>Transformação: Summon Devil Trigger</p>
        <p>Linhagem: Sparda</p>
        </div>
        <div className="historia">
            <h1>Historia</h1>
            <p>
            Ele é um orfão criado pela ordem,na cidade de Fortuna. Após combater Dante durante um rápido encontro,Nero teve a ingrata tarefa de persegui-lo,após Dante ter assassinado Sanctus.
            </p>

            <div className="logoMusicDiv">
            <p>Musica tema: Devil Trigger</p>
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

export default NeroPage