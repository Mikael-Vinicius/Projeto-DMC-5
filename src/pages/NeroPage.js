import React from "react";
import '../header.css'
import '../characterPage.css'
import logoName from '../imagens/glow.png'
import { Link } from 'react-router-dom';
import Header from "../componentes/header";
import Footer from "../componentes/footer";

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
    <div class="container">
    <iframe allowFullScreen width="100%" height="100%" className="video"
		 src="https://www.youtube.com/embed/yX5x-Ne6RdQ">
		
        </iframe>
        </div>

        <div className="imgContainer">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f6b0bf93-bf66-4551-8b9b-b723ee634429/dce48lp-eb691403-9c38-4b49-8861-3a8e4a654285.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y2YjBiZjkzLWJmNjYtNDU1MS04YjliLWI3MjNlZTYzNDQyOVwvZGNlNDhscC1lYjY5MTQwMy05YzM4LTRiNDktODg2MS0zYThlNGE2NTQyODUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zE1ZmNej-_5dsPt9oTaylG7Z90lUJAuMOSuGt1B5mes"/>
        </div>

        <div className="sideBar">
            <img src={logoName}/>
        </div>
        </div>
   <Footer />
</body>
</html>
    )
}

export default NeroPage