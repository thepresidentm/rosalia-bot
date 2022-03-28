// El abecedario segun rosalia
const abc = ["A","B","C","D","E","F","G","H","I","J","M","N","O","P","Q","R","S", "T", "U","V","W","X","Y","Z"];
const url = 'https://rosalia-api.herokuapp.com/';

data = JSON.parse(data);
console.log(data);

const textoBase = '' +
    'A de alfa, altura, alien<br>' +
    'B de bandida<br>' +
    'C de coqueta<br>' +
    'D de dinamita<br>' +
    'E de expensiva, emperatriz, enigma, enterada<br>' +
    'F de Flux Æon<br>' +
    'G de guapa<br>' +
    'H de Honduras<br>' +
    'I de inteligencia artificial<br>' +
    'J de jineta<br>' +
    'M de MOTOMAMI, MOTOMAMI-MOTOMAMI, MOTOMAMI-MOTOMAMI, je<br>' +
    'N de "Ni se te ocurra ni pensarlo"<br>' + 
    'O de orquídea<br>' +
    'P de patrona<br>' +
    'Q de "Qué reinona"<br>' +
    'R de racineta, racineta, rango, racineta, rango<br>' +
    'S de sata<br>' +
    'T de titánica<br>' +
    'U de ultrasonidos<br>' +
    'V de vendetta<br>' +
    'W de Willie Colón, de Winterfall también<br>' +
    'X de "Te despejo la X en un momento"<br>' +
    'Y de yenes, de yantas<br>' +
    "Y Z de zarzamora, o de zapatea'o, o de... zorra, también'<br>"
let contenedor = document.getElementById("contenedor");

inicio();

function inicio(){
    contenedor.innerHTML = textoBase;
}

/*
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
*/

function ejecutar(){
    fetch(url)
    .then(response => response.json())
    .then(data => generar(data));
}

function generar(datos){
    let nuevoTexto = '' +
    'A de ' + datos.a[0] + ', ' + datos.a[1] + ', ' + datos.a[2] + '<br>' +
    'B de ' + datos.b + '<br>' +
    'C de ' + datos.c + '<br>' +
    'D de ' + datos.d + '<br>' +
    'E de ' + datos.e[0] + ', ' + datos.e[1] + ', ' + datos.e[2] + ', ' + datos.e[3] + '<br>' +
    'F de ' + datos.f + '<br>' +
    'G de ' + datos.g + '<br>' +
    'H de ' + datos.h + '<br>' +
    'I de ' + datos.i + '<br>' +
    'J de ' + datos.j + '<br>' +
    'M de MOTOMAMI, MOTOMAMI-MOTOMAMI, MOTOMAMI-MOTOMAMI, je<br>' +
    'N de "Ni se te ocurra ni pensarlo"<br>' + 
    'O de ' + datos.o + '<br>' +
    'P de ' + datos.p + '<br>' +
    'Q de "Qué reinona"<br>' +
    'R de ' + datos.r[0] + ', ' + datos.r[1] + ', ' + datos.r[2] + ', ' + datos.r[3] + ', ' + datos.r[4] + '<br>' +
    'S de ' + datos.s + '<br>' +
    'T de ' + datos.t + '<br>' +
    'U de ' + datos.u + '<br>' +
    'V de ' + datos.v + '<br>' +
    'W de Willie Colón, de ' + datos.w[1] + ' también<br>' +
    'X de "Te despejo la X en un momento"<br>' +
    'Y de ' + datos.y[0] + ', de yantas<br>' +
    "Y Z de " + datos.z[0] + ", o de " + datos.z[1] + ", o de... " + datos.z[2] + ", también'<br>";
    contenedor.innerHTML = nuevoTexto;
}