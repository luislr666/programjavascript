function ejercicio13(){
	var division = document.getElementById("ejer13");
	    division.style.display = "inline";
}

function agrega1(){
	var lista = document.getElementById("lista");
	var nuevo = document.createElement("li");
	var contenido = document.createTextNode("Esto es un Nodo de mas");

	nuevo.appendChild(contenido);
	lista.appendChild(nuevo);
}


function agrega2 () {
	var lista = document.getElementById("lista");
	var otroNuevo = "<li>Otra forma</li>";
	lista.innerHTML += otroNuevo;
}

