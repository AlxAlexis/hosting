function calcular() {
	let sexo = parseInt(document.getElementById("sexo").value);
	let peso = parseFloat(document.getElementById("peso").value);
	let altura = parseFloat(document.getElementById("altura").value);
	let edad = parseFloat(document.getElementById("edad").value);
	let actividadFisica = parseInt(document.getElementById("actividad").value);
	let cal = 0;
	let actividad = 0;
	switch (actividadFisica){
		case 1: actividad = 1.2;break;
		case 2: actividad = 1.375;break;
		case 3: actividad = 1.55;break;
		case 4: actividad = 1.725;break;
		case 5: actividad = 1.9;break;

	}
	if( sexo == 1){
		cal = ( 66 + (13.7*peso) +((5 * altura) - (6.8 * edad)) )* actividad;
	}else if(sexo == 2){
		cal = ( 655 + (9.6 * peso) + ((1.8 * altura) - (4.7 * edad))) * actividad;
	}
	document.getElementById("resultado").innerHTML="Calorias mantenimiento: "+ cal.toFixed(0);
	document.getElementById("resultado-bajar").innerHTML="Para bajar de peso: "+ (cal-300).toFixed(0);
	document.getElementById("resultado-subir").innerHTML="Para subir de peso: "+ (cal+300).toFixed(0);

}