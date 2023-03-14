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
          <div class="botoes">
					<button class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Nero</button>
					<button class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dante</button>
					<button class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">V</button>
					<button class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Vergil</button>
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
