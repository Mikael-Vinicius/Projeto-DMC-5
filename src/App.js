import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <html lang="pt-BR">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>DMC 5</title>

		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap" rel="stylesheet" />

		<link rel="stylesheet" href="./src/css/reset.css" />
		<link rel="stylesheet" href="./src/css/estilos.css" />
		<link rel="stylesheet" href="./src/css/responsivo.css" />
	</head>
	<body>
		<main>
			<div class="carrossel">
      <img src='https://images8.alphacoders.com/994/994693.png'/>
			</div>

			<div class="conteudo">
				<div class="informacoes">
        <img className='logo' src='https://www.seekpng.com/png/full/34-349162_devil-may-cry5-devil-may-cry-5-logo.png'/>
          <div class="botoes">
					<button class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Nero <img className='imagem' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f3810965-d444-49fe-860e-ea51d4e13361/dcws2a3-4760284d-904d-4cea-ad2a-cdda3443474d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YzODEwOTY1LWQ0NDQtNDlmZS04NjBlLWVhNTFkNGUxMzM2MVwvZGN3czJhMy00NzYwMjg0ZC05MDRkLTRjZWEtYWQyYS1jZGRhMzQ0MzQ3NGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NRxPCc4bmDhdzNIzdYCz1GPlT4-Vlkc5zm0mC67GGTE'/></button>
					<button class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dante <img className='imagem-2' src='https://sm.ign.com/t/ign_br/screenshot/default/dante_dbme.1280.jpg'/></button>
					<button class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">V <img className='imagem-3' src='https://www.comboinfinito.com.br/principal/wp-content/uploads/2018/09/V-DMC-5.jpg'/></button>
					<button class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Vergil <img className='imagem-4' src='https://c4.wallpaperflare.com/wallpaper/528/107/668/devil-may-cry-devil-may-cry-5-vergil-devil-may-cry-hd-wallpaper-preview.jpg'/></button>
				</div>
					<p class="descricao"></p>
				</div>

				<div class="botoes-carrossel">
					<button class="">123</button>
					<button class=""></button>
					<button class=""></button>
					<button class=""></button>
					<button class=""></button>
					<button class=""></button>
				</div>
			</div>

			<aside class="menu-lateral">
				<ul>
					<li>
						<a href="https://github.com/Mikael-Vinicius" target="_blank">
							<img src="./src/imagens/github.svg" alt="ícone GitHub" class="icone" />
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/mikael-vinicius/" target="_blank">
							<img src="./src/imagens/linkedin-in.svg" alt="ícone LinkedIn" class="icone" />
						</a>
					</li>
				</ul>
			</aside>
		</main>
		<script src="./src/js/index.js"></script>
	</body>
</html>

  );
}

export default App;
