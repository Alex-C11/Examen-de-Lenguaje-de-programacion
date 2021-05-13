function formula(){
	
	const pi = 3.1416;
	let r =parseInt(document.getElementById('numero1').value);

	let solucion= pi*r*r;

	document.getElementById("solucion").value="El area es:"+solucion;

}