
function ejercicio12 (){
	var elemento = document.getElementById("adicional");
  		elemento.className = "visible";
  		
   var enlace = document.getElementById("enlace");
   	  enlace.className = "oculto";
  	  
  var boton = document.getElementById("botonOculto");
      boton.style.display = "inline";
}

function mostrar(){
	var division = document.getElementById("ejer12");
	    division.style.display = "inline";
	

}

function ocultar(){
	var elemento = document.getElementById("adicional");
	    
	    elemento.className = "oculto"
	var boton = document.getElementById("botonOculto");
	    boton.style.display = "none";
	var enlace = document.getElementById("enlace");
	    enlace.className = "visible";
	
}
