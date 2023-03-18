import React from "react"

import '../header.css'
import { Link } from 'react-router-dom';

 const logo = "https://www.seekpng.com/png/full/34-349162_devil-may-cry5-devil-may-cry-5-logo.png"
// const wallpaper = 'https://images4.alphacoders.com/948/948585.png'
function Header(){
    return(
<html lang="pt-br">
<head>
    <title>Devil May Cry 5 Site</title>
</head>
<body>
    <header>
        <nav>
            <ul className='header' >
                <img className='logo' src={logo}/>
                <li className=""><Link to="/">Home</Link></li>
                <li><Link to="/personagens">Personagens</Link></li>
                <li><a href="#">Armas</a></li>
            </ul>
        </nav>
        </header>
        </body>
        </html>
    )
}

export default Header
