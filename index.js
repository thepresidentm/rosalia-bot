// El abecedario segun rosalia
const abc = ["A","B","C","D","E","F","G","H","I","J","M","N","O","P","Q","R","S", "T", "U","V","W","X","Y","Z"];
const url = 'https://rosalia-api.herokuapp.com/';
const textoBase = 'A de alfa, altura, alien<br>B de bandida<br>C de coqueta<br>D de dinamita<br>E de expensiva, emperatriz, enigma, enterada<br>F de Flux Æon<br>G de guapa<br>H de Honduras<br>I de inteligencia artificial<br>J de jineta<br>M de MOTOMAMI, MOTOMAMI-MOTOMAMI, MOTOMAMI-MOTOMAMI, je<br>N de "Ni se te ocurra ni pensarlo"<br>O de orquídea<br>P de patrona<br>Q de "Qué reinona"<br>R de racineta, racineta, rango, racineta, rango<br>S de sata<br>T de titánica<br>U de ultrasonidos<br>V de vendetta<br>W de Willie Colón, de Winterfall también<br>X de "Te despejo la X en un momento"<br>Y de yenes, de yantas<br>Y Z de zarzamora, o de zapatea"o, o de... zorra, también';
let contenedor = document.getElementById("contenedor");

contenedor.innerHTML = textoBase;

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));