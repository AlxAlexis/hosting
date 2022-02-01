function getRandomArbitrary() {
  return Math.random() * (4 - 1) + 1;// 1 = piedra 2 = papel 3 = tijera
}
function jugoMaquina(random){
  switch(random){
    case 1: document.getElementById('maquina').innerHTML="La máquina jugó: Piedra";break;
    case 2: document.getElementById('maquina').innerHTML="La máquina jugó: Papel";break;
    case 3: document.getElementById('maquina').innerHTML="La máquina jugó: Tijera";break;
  }
}
let empatadas = 0;
let ganadas = 0;
let perdidas = 0;
function jugar(){
	let yo = parseInt(document.getElementById('select').value);
	let random = parseInt(getRandomArbitrary());
  jugoMaquina(random);
	if( yo == 1 ){
    switch (random){
      case 1: document.getElementById("estado").innerHTML="Empate";empatadas++;break;
      case 2: document.getElementById("estado").innerHTML="Perdiste";perdidas++;break;
      case 3: document.getElementById("estado").innerHTML="Ganaste";ganadas++;break;
    }
  }
  if (yo == 2) {
    switch (random){
      case 1: document.getElementById("estado").innerHTML="Ganaste";ganadas++;break;
      case 2: document.getElementById("estado").innerHTML="Empate";empatadas++;break;
      case 3: document.getElementById("estado").innerHTML="Perdiste";perdidas++;break;
    }
  }
  if (yo == 3){
    switch (random){
      case 1: document.getElementById("estado").innerHTML="Perdiste";perdidas++;break;
      case 2: document.getElementById("estado").innerHTML="Ganaste";ganadas++;break;
      case 3: document.getElementById("estado").innerHTML="Empate";empatadas++;break;
    }
  }
  document.getElementById("totales").innerHTML="Rondas Totales: "+(empatadas+perdidas+ganadas);
  document.getElementById("ganadas").innerHTML="Ganadas: "+ganadas;
  document.getElementById("perdidas").innerHTML="Perdidas: "+perdidas;
  document.getElementById("empatadas").innerHTML="Empatadas: "+empatadas;

}