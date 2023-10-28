function ejercicio15(elEvento){
	var division = document.getElementById("ejer15");
	var estiloDiv = {
		
		'width'		: '160px',
		'border'	: 'thin solid silver',
		'padding' 	: '.5em',
		
		'display'	: 'block'
	};
	estilos(division, estiloDiv);
	

	var evento = elEvento || window.event;
	if(evento.type == "mousemove"){
		var ie = navigator.userAgent.toLowerCase().indexOf("msie") != -1;
		division.style.background = "#00FF00";
		
		var relativaX, relativaY, absolutaX, absolutaY;

		if(ie){
			if(document.documentElement && document.documentElement.scrollTop){ 
                absolutaX = evento.clientX + document.documentElement.scrollLeft;
                absolutaY = evento.clientY + document.documentElement.scrollTop;
              }else { 
                absolutaX = evento.clientX + document.body.scrollLeft;
                absolutaY = evento.clientY + document.body.scrollTop;
              }
		}else{
			absolutaX = evento.pageX;
			absolutaY = evento.pageY;			
		}

		relativaX = evento.clientX;
		relativaY = evento.clientY;

		muestraInformacion(["Raton", 
			                "Navegador [" + relativaX + ", " + relativaY + "]", 
			                "Pagina [" + absolutaX + ", " + absolutaY + "]"], division);
	}
	if(evento.type == "keypress"){
		division.style.background = "#CCE6FF";

		var caracter = evento.charCode || evento.keyCode;
		var letra = String.fromCharCode(caracter);
		var codigo = letra.charCodeAt(0);

		muestraInformacion(["Teclado", 
			                "Carácter [" + letra + "]", 
			                "Código [" + codigo + "]"], division);
	}
	if(evento.type == "click"){
		division.style.background = "#FFFF00";
	}
//Para detectar los eventos.
document.onmousemove = ejercicio15;
document.onkeypress = ejercicio15;
//document.onclick = ejercicio15;
}

function muestraInformacion(mensaje, idtag){
	idtag.innerHTML = "<h1>" + mensaje[0] + "</h1>";
	for(var i = 1; i < mensaje.length; i++){
		idtag.innerHTML += "<p>" + mensaje[i] + "</p>";
	}
}

function estilos(elemento, listaEstilos){
	for(var estilo in listaEstilos){
		elemento.style[estilo] = listaEstilos[estilo];
	}
}
