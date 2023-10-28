function ejercicio16(elEvento){
	var division = document.getElementById("ejer16");
	var estylDiv = {
		"background" : "#FFFFCC",
		"border"  : "thin solid silver", 
		"display" : "block",
		"padding" : ".5em",
		"width"   : "160px"

	};
	estilos(division, estylDiv);

	var evento = elEvento || window.event;
	var coorX = evento.clientX;
	var coorY = evento.clientY;

	var dimension = sizeWindowBrowser();
	var longX = dimension[0];
	var longY = dimension[1];

	var positionH = "";
	var positionV = "";

	if(coorX > (longX / 2)){
		positionH = "derecha";	
	}else{
		positionH = "izquierda";
	}

	if(coorY > (longY / 2)){
		positionV = "abajo";	
	}else{
		positionV = "arriba";
	}

	muestraInformacion(["Posicion", positionH, positionV], division);
	if(division.style.display == "block"){
		document.onclick = ejercicio16;		
	}
}

function sizeWindowBrowser(){
	var dimenciones = [];
	if(typeof(window.innerWidth) == 'number') {
        
        dimensiones = [window.innerWidth, window.innerHeight];
      } else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        
        dimensiones = [document.documentElement.clientWidth, document.documentElement.clientHeight];
      } else if(document.body && (document.body.clientWidth || document.body.clientHeight)) {
       
        dimensiones = [document.body.clientWidth, document.body.clientHeight];
      }
     
      return dimensiones;}