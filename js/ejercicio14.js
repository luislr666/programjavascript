function ejercicio14(){
	var division = document.getElementById("ejer14");
	    division.style.display = "inline";
}

function muestraOculta(id){
	var parrafo = document.getElementById("contenidos_" + id);
	var alink =   document.getElementById("enlace_" + id);

	if(parrafo.style.display == "" || parrafo.style.display == "block"){
	    parrafo.style.display = "none";
	    alink.innerHTML = "Mostrar contenido";
	    	
	}else{
		parrafo.style.display = "block";
		alink.innerHTML = "Ocultar contenido";
		
	}

}
