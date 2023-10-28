function ejercicio9 () {

	var string = prompt("Mayusculas ó minusculas ó ambas." +
						"\n\nIngresa cualquier cadena de texto: ");
	var result = mayusMinus(string);
	alert("\"" + string + "\"\n Esta formada por " + result + ".");
	console.log(mayusMinus(string));
}

function mayusMinus (argument) {

	if(argument == argument.toUpperCase()){
		return "mayusculas";
	}else if(argument == argument.toLowerCase()){
		return "minusculas";
	}else{
		return " mayusculas y minusculas";
	}
}
