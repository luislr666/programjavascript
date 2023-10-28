function ejercicio6 () {
	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	
	var dni = prompt("Introduce tu DNI: ");
	dni = parseInt(dni);
	var letra_dni = prompt("Introduce la letra de tu DNI: ");
	letra_dni = letra_dni.toUpperCase();

	 var valor = dni + letra_dni;


	if (!(/^\d{8}[A-Z]$/.test(valor))) {
		alert("El formato es correcto");

	}

	if(valor.charAt(8) != letras[(valor.substring(0, 8))%23]) {
  		alert("La letra no es correcta");

	}

	if(dni <= 0 || dni > 99999999){
		alert("Numero no valido.");
	}else{
		var numLetra = dni % 23;
		var letra = letras[numLetra];

		if(letra == letra_dni){
			alert("DNI: " + dni + "-" + letra_dni);
		}else{
			alert(letra_dni + " no corresponde a tu DNI tu letra correcta es: " + letra + ".");
		}
	}

}
