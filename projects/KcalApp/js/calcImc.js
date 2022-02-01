function pasarAltura(alturaCm){
	return alturaCm/100;
}

function calcular() {
	let peso = parseFloat(document.getElementById("peso").value);
	let alturaCm = parseFloat(document.getElementById("altura").value);
	let imc = 0;
	let alturaM = pasarAltura(alturaCm);
	imc = peso / (alturaM * alturaM);
	document.getElementById("resultado").innerHTML="IMC: "+imc.toFixed(2);
	if(imc < 18.5){
		document.getElementById("estado").innerHTML="Estado: Peso inferior al normal";
	}else if (imc >= 18.5 && imc <= 24.9){
		document.getElementById("estado").innerHTML="Estado: Peso normal";
	}else if (imc > 24.9 && imc <= 29.9){
		document.getElementById("estado").innerHTML="Estado: Peso superior al normal";
	}else if (imc >  29.9){
		document.getElementById("estado").innerHTML="Estado: Obesidad";
	}

}