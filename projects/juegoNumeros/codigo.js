
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

let random = undefined;

function jugar(){
	let min = 1;
	let max = parseInt(document.getElementById('max').value);
	if (max != undefined && max >= 1){
		random = parseInt(getRandomArbitrary(min,max));
		document.getElementById("inicio").style.display = "none";
		document.getElementById("juego").style.display = "block";
		document.getElementById("ingresar").style.display = "block";
		document.getElementById("jugarDeNuevo").style.display = "none";
	}else {
		document.getElementById('IngreseDeNuevo').innerHTML = "Ingrese un valor válido";
	}

}
let intentos = 0;
function adivinar (){
	
	intentos++;
	let num = parseInt(document.getElementById("num").value);
	if ( num < random){
		document.getElementById("pista").innerHTML = "Pista: El número es MAYOR<br>Tu número: ("+num+")";
		document.getElementById("intentos").innerHTML = "Intentos: "+intentos;
		document.getElementById("num").value = null;
	}else if(num>random){
		document.getElementById("pista").innerHTML = "Pista: El número es MENOR <br>Tu número: ("+num+")";
		document.getElementById("intentos").innerHTML = "Intentos: "+intentos;
		document.getElementById("num").value = null;
	}else if (num == random){
		document.getElementById("pista").innerHTML = "El número ("+num+") es CORRECTO" ;
		document.getElementById("intentos").innerHTML = "Intentos: "+intentos;
		document.getElementById("num").value = null;
		document.getElementById('pista').style.color = "#05FF22";
		document.getElementById("ingresar").style.display = "none";
		document.getElementById("jugarDeNuevo").style.display = "block";
	}
	
}
function volverJugar(){
	document.getElementById("juego").style.display = "none";
	document.getElementById("inicio").style.display = "block";
	intentos = 0;
	num = undefined;
	max = undefined;
	random = undefined;
	document.getElementById("pista").innerHTML = "Pista: ";
	document.getElementById("intentos").innerHTML = "Intentos: 0"
	document.getElementById("max").value = undefined;
	document.getElementById('num').value = undefined;
	document.getElementById('pista').style.color = "red";
}


