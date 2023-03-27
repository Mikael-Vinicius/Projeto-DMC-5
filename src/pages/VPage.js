import React from 'react';
import Header from '../componentes/header';
import Footer from '../componentes/footer';
import logoName from '../imagens/glow2.png';
import '../V.css'
import logoMusic from '../imagens/DMC5_Crimson_Cloud.webp'

const vImage = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e5896a5-4a79-496a-bea4-81f26cfa2650/dd27836-d30aa465-5089-404e-a4d1-62b8f9d72ab5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVlNTg5NmE1LTRhNzktNDk2YS1iZWE0LTgxZjI2Y2ZhMjY1MFwvZGQyNzgzNi1kMzBhYTQ2NS01MDg5LTQwNGUtYTRkMS02MmI4ZjlkNzJhYjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WINtgj85UB5liGLDGzdleY1Y_qCNFpaIlRSLcCVVtts'

function VPage() {
    return (
        <html lang="pt-br">
        <head>
            <title>Devil May Cry 5 Site</title>
        </head>
        <body>
            <Header />
            <div id="VBG" className="background">
                <main className='main-content'>
                <div className="sideBar">
                    <img src={logoName} alt="Logotipo do Devil May Cry 5"/>
                </div>
                <div className="container">
                    <iframe allowFullScreen width="100%" height="100%" className="video"
                        src="https://www.youtube.com/embed/gGb3p5WPJdg">
                    </iframe>
                </div>

                <div className="imgContainer">
                    <img src={vImage} alt="Imagem do personagem V" />
                </div>

                
                </main>
                <section className='informacoesP'>
                <div className="descricao">
                    <p>Nome: V</p>
                    <p>Idade: Desconhecida</p>
                    <p>Altura: 1,78 cm</p>
                    <p>Sexo: Masculino</p>
                    <p>Raça: Humano/Demônio</p>
                    <p>Profissão: Caçador de Demônios</p>
                    <p>Transformação: Devil Trigger</p>
                    <p>Linhagem: Desconhecida</p>
                </div>

                <div id="vStory" className="historia">
                    <h1>História</h1>
                    <p>
                        V é um personagem jogável em Devil May Cry 5. Ele é um homem misterioso que contrata Dante para caçar o demoníaco Urizen. V tem o poder de convocar três demônios familiares - Griffon, Shadow e Nightmare - para lutar por ele. Sua personalidade é calma e um pouco melancólica, em contraste com os personagens principais anteriores da série.
                    </p>
                    <div className="logoMusicDiv">
            <p>Musica tema: Crimson Cloud</p>
            <img className="logoMusic" src={logoMusic}/>
            </div>
                </div>
                </section>
            </div>
            <Footer />
        </body>
        </html>
    );
}

export default VPage;