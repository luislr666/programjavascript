function ejercicio8 () {

	var num = prompt("Par o Impar." +
		             "\n\nIngresa un numero entero: ");

	var result = parImpar(num);
	alert(num + " es " + result + ".");
}

function parImpar (numero) {
	if(numero % 2 == 0){
		return "par";
	}else{
		return "impar";
	}
}
