function ejercicio10 (){
	var frase = prompt("¿Es un palindromo?" +
							"\n\nEscribe una frase y verificare si es palindromo o no.");
	alert(palindromo(frase));
}

function palindromo (frase){
	frase = frase.toLowerCase();
	var fraseSpace = frase.split("");
	var arrayFrase="";
	var respuesta = frase.toUpperCase() + "\n\n";

	for(var i in frase){
		if(fraseSpace[i] != " "){
			arrayFrase += fraseSpace[i];
		}
	}
	
	var arrayNormal = arrayFrase.split("");
	var arrayInverso = arrayFrase.split("").reverse();
	var palindromo;
	var diferente = 0;
	for(var i in arrayNormal){
		if (arrayNormal[i] == arrayInverso[i]){
			palindromo = true;
		}else{
			palindromo = false;
			diferente++;
		}
	}

	if (diferente == 0){
		respuesta += " Es palindromo."
	}else{
		respuesta += " No es palindromo." }}
