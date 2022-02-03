
const API_URL = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';
let dolarBlueVenta, dolarBlueCompra, dolarOficialVenta, dolarOficialCompra,dolarBlue;
fetch(API_URL)
.then(res => res.json())
.then(data => {
	data.forEach(dolar => {
		console.log(dolar.casa.nombre)
		console.log("Venta: "+dolar.casa.venta)
		console.log("Compra: "+dolar.casa.compra)
		console.log("Agencia: "+dolar.casa.agencia)
		
		if(dolar.casa.agencia == 310){
			dolarBlueVenta = (dolar.casa.venta);
			dolarBlueCompra = (dolar.casa.compra);
			dolarBlue = parseFloat(dolar.casa.venta);
		}
		if(dolar.casa.agencia == 349){
			dolarOficialVenta = (dolar.casa.venta);
			dolarOficialCompra = (dolar.casa.compra);
		}
		document.getElementById('dolar-oficial').innerHTML = `<b style="color : #7fff00">Oficial: </b><b style="color : red"> Compra: </b>${dolarOficialCompra} <b style="color : red">Venta: </b>${dolarOficialVenta}`
		document.getElementById('dolar-blue').innerHTML = `<b style="color : #7fff00">Blue: </b><b style="color : red"> Compra: </b>${dolarBlueCompra} <b style="color : red">Venta: </b>${dolarBlueVenta}`
	})
})
.catch(err => console.log(err))
let date = new Date();
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();
document.getElementById('date').innerHTML = `Fecha: ${day}/${month}/${year}`

function convertir() {
	let valor = parseFloat(document.getElementById("cantidad").value);
	document.getElementById("valor").innerHTML="<b>$ "+valor+"</b>";
	let de = document.getElementById("de").value;
	let a = document.getElementById("a").value;
	let resultado =0;
	//peso a dolar
	if( de == 1 && a == 2){
		resultado = valor / dolarBlue;
	}
	//dolar a peso
	if(de  == 2 && a == 1){
		resultado = valor *dolarBlue;
	}
	//iguales
	if((de == 2 && a == 2)||(a == 1 && de==1)){
		resultado = valor;
	}
	document.getElementById("resultado").innerHTML="Resultado: $"+resultado.toFixed(2);
	
}