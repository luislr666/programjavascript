function ejercicio17(){
	var div = document.getElementById("ejer17");
		div.style.display = "block";
}

function limita(pushKey, maximoCaracteres){
	var elemento = document.getElementById("textare");

	
	var tecla = window.event || pushKey;
	var codCaracter = tecla.keyCode || tecla.charCode;


	if(codCaracter == 37 || codCaracter == 39){
		return true;
	}
	
	if(codCaracter == 8 || codCaracter == 46){
		return true;
	}else if(elemento.value.length >= maximoCaracteres){
		return false;
	}else{
		return true;
	}
}

function actualizaContador(maxCar){
	var elemento = document.getElementById("textare");
	var contador = document.getElementById("contador");

	if(elemento.value.length >= maxCar){
		contador.innerHTML = (maxCar - maxCar);
	}else{
		contador.innerHTML = (maxCar - elemento.value.length);
	}
}


function reloj (){
	var fechaHora = new Date();
	var horas = fechaHora.getHours();
	var minutos = fechaHora.getMinutes();
	var segundos = fechaHora.getSeconds();

	if(horas < 10) { horas = '0' + horas; }
	if(minutos < 10) { minutos = '0' + minutos; }
	if(segundos < 10) { segundos = '0' + segundos; }

	

	
	document.getElementById("reloj").innerHTML = horas+':'+minutos+':'+segundos;
	
	
}


window.onload = function() {
  setInterval(reloj, 1000);

 
  Calendar.setup({
    inputField: "fecha",
    ifFormat:   "%d / %m / %Y",
    button:     "selector"
  });

 
  Calendar.setup({
    button:      "selectorM",
    displayArea: "fecha_usuario",
    daFormat:    "%A, %d de %B de %Y",
    ifFormat:    "%d/%m/%Y",
    inputField:  "fecha",
    weekNumbers: false
  });

}
