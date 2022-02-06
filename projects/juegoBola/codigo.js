const contenedor = document.querySelector('.contenedor');
//definicion de medidas
const altoTablero = 300;
const anchoTablero = 570;
const anchoBloque = 100;
const altoBloque = 20;
//definir posicion bola
const posicionInicialBola = [270, 40]
let posicionActualBola = posicionInicialBola
let xDireccionBola = 2
let yDireccionBola = 2
//dufinir posicion usuario
const posicionInicialUsuario = [230,10]
let posicionActualUsuario = posicionInicialUsuario
let diametro = 20
//definir timer

let timerID
let score = 0;
//definicion de la calse bloque
class Bloque{
	constructor(ejeX,ejeY){
		this.bottomLeft = [ejeX , ejeY]
		this.bottomRight = [ejeX + anchoBloque, ejeY]
		this.topLeft = [ejeX, ejeY + altoBloque]
		this.topRight = [ejeX + anchoBloque, ejeY + altoBloque]	
	}
}
//definir todos los bloques
const bloques = [
	new Bloque(10, 250),
	new Bloque(120, 250),
	new Bloque(230, 250),
	new Bloque(340, 250),
	new Bloque(450, 250),
	new Bloque(10, 220),
	new Bloque(120, 220),
	new Bloque(230, 220),
	new Bloque(340, 220),
	new Bloque(450, 220),
	new Bloque(10, 190),
	new Bloque(120, 190),
	new Bloque(230, 190),
	new Bloque(340, 190),
	new Bloque(450, 190),
]
//funcion añadir bloques que
function addBloques(){
	for (let i = 0; i < bloques.length; i++){
		const bloque = document.createElement('div')
		bloque.classList.add('bloque')
		bloque.style.left = bloques[i].bottomLeft[0] + 'px'
		bloque.style.bottom = bloques[i].bottomLeft[1] + 'px'
		contenedor.appendChild(bloque)
	}
}
addBloques();
//definir usuario

function dibujarUsuario(){
	usuario.style.left = posicionActualUsuario[0]+'px'
	usuario.style.bottom = posicionActualUsuario[1]+'px'
}
//añadir usuario
const usuario = document.createElement('div')
usuario.classList.add('usuario')
contenedor.appendChild(usuario)
dibujarUsuario();
//mover al usuario
function moverUsuario(e){
	switch(e.key){
		case 'ArrowLeft':
			if ( posicionActualUsuario[0] > 0){
				posicionActualUsuario[0] -= 10
				dibujarUsuario();
			}break;
		case 'ArrowRight':
			if(posicionActualUsuario[0] < (anchoTablero - anchoBloque)){
				posicionActualUsuario[0] +=10
				dibujarUsuario();
			}
	}
}
//añadir evento escuchador para el documento
document.addEventListener('keydown',moverUsuario)

//dibujar la bola
function dibujarBola(){
	bola.style.left = posicionActualBola[0]+'px'
	bola.style.bottom = posicionActualBola[1]+'px'
}
const bola = document.createElement('div')
bola.classList.add('bola')
contenedor.appendChild(bola)
dibujarBola();

function moverBola(){
	posicionActualBola[0] += xDireccionBola
	posicionActualBola[1] += yDireccionBola
	dibujarBola()
	revisarColisiones();
	gameOver();
}
function start(){
	
	const botonJugar = document.querySelector('.start')
	botonJugar.style.display = 'none'
	timerID = setInterval(moverBola, 20)
}
function revisarColisiones(){
	//colision con bloques
	for (let i = 0; i < bloques.length; i++){
		if((posicionActualBola[0] > bloques[i].bottomLeft[0] && posicionActualBola[0] < bloques[i].bottomRight[0])
			&& ((posicionActualBola[1]+diametro) > bloques[i].bottomLeft[1] && posicionActualBola[1] < bloques[i].topLeft[1])
			){
			const todosLosBloques = Array.from(document.querySelectorAll('.bloque'))
			todosLosBloques[i].classList.remove('bloque')
			bloques.splice(i,1)
			cambiarDireccion();
			score = score + 1;
			document.querySelector('.score').innerHTML = `Score: ${score}`
			}
	}
	//coliciones con las paredes
	if(
		posicionActualBola[0] >= (anchoTablero - diametro) ||
		posicionActualBola[1] >= (altoTablero - diametro) ||
		posicionActualBola[0] <= 0 ||
		posicionActualBola[1] <= 0
	){
		cambiarDireccion();
	}

	if((posicionActualBola[0] > posicionActualUsuario[0] && posicionActualBola[0]< posicionActualUsuario[0] + anchoBloque) && 
		(posicionActualBola[1] > posicionActualUsuario[1] && posicionActualBola[1] < posicionActualUsuario[1] + altoBloque)
		){
			cambiarDireccion();
		}

}

function gameOver(){
	if(posicionActualBola[1] <= 0){
		clearInterval(timerID)
		// document.removeEventListener('keydown', moverUsuario)
		const botonReintentar = document.querySelector('.volver-jugar')
		botonReintentar.style.display = 'flex'
		posicionActualBola[0] = 270
		posicionActualBola[1] = 40
		dibujarBola()
	}

}
function volverJugar(){
	timerID = 0;
	timerID = setInterval(moverBola, 20)
	const botonReintentar = document.querySelector('.volver-jugar')
	botonReintentar.style.display = 'none'
	
	
}
function cambiarDireccion(){
	if(xDireccionBola === 2 && yDireccionBola === 2){
		yDireccionBola = -2
		return
	}
	if(xDireccionBola === 2 && yDireccionBola === -2){
		xDireccionBola = -2
		return
	}
	if(xDireccionBola === -2 && yDireccionBola === -2){
		yDireccionBola = 2
		return
	}
	if(xDireccionBola === -2 && yDireccionBola === 2){
		xDireccionBola = 2
		return
	}	
}