import React from 'react';

// import blueRoseImg from '../imagens/BlueRose.png';
// import redQueenImg from '../imagens/RedQueen.png';
// import devilBreakerImg from '../imagens/DevilBreaker.png';
// import yamatoImg from '../imagens/Yamato.png';
// import rebellionImg from '../imagens/Rebellion.png';
// import coyoteAImg from '../imagens/Coyote-A.png';
// import cavaliereImg from '../imagens/Cavaliere.png';

import '../armas.css'

const Armas = () => {
  return (
    <div className='arma-card'>
    <h1>Armas em Devil May Cry 5</h1>
    <ul>
    <li className="arma">
    <h2>Blue Rose</h2>
    <img className="imagem-arma" alt="Blue Rose" />
    <p>Uma pistola customizada usada por Nero, capaz de disparar tiros carregados poderosos.</p>
    </li>
    <li className="arma">
    <h2>Red Queen</h2>
    <img className="imagem-arma" alt="Red Queen" />
    <p>A espada de Nero, que pode ser carregada para aumentar seu poder de ataque.</p>
    </li>
    <li className="arma">
    <h2>Devil Breakers</h2>
    <img className="imagem-arma"  alt="Devil Breakers" />
    <p>Próteses mecânicas que substituem o braço direito de Nero. Cada uma possui habilidades únicas.</p>
    </li>
    <li className="arma">
    <h2>Yamato</h2>
    <img className="imagem-arma"  alt="Yamato" />
    <p>A espada lendária de Sparda, usada por Vergil em suas batalhas.</p>
    </li>
    <li className="arma">
    <h2>Rebellion</h2>
    <img className="imagem-arma" alt="Rebellion" />
    <p>A espada de Dante, que pode mudar de forma e liberar seu verdadeiro poder.</p>
    </li>
    <li className="arma">
    <h2>Coyote-A</h2>
    <img className="imagem-arma" alt="Coyote-A" />
    <p>A pistola de Dante, capaz de disparar tiros explosivos e transformar-se em um lança-chamas.</p>
    </li>
    <li className="arma">
    <h2>Cavaliere</h2>
    <img className="imagem-arma"alt="Cavaliere" />
    <p>A motocicleta demoníaca de Dante, que pode ser dividida em duas espadas gigantes.</p>
    </li>
    </ul>
    </div>
  );
}

export default Armas;