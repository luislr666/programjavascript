function ejercicio11 (){
    var documento = document.getElementById("ejerc11").getElementsByTagName("a");
    var info = document.getElementById("info");
    
    var conteo = 0;
    for(var i = 0; i < documento.length;  i++){
        if(documento[i].href == "http://prueba" || documento[i].href == "http://prueba/"){
            conteo ++;
        }
    }

    var parrafos = document.getElementById("ejerc11").getElementsByTagName("p");
    var linksParrafo3 = parrafos[2].getElementsByTagName("a");


    info.innerHTML = "Solucion.<br><br>" + 
           "La pág dada tiene: " + documento.length + " enlaces.<br>" +
           "Penúltimo enlace: " + documento[documento.length - 2].href + "<br>" +
           "Numero de enlaces que enlazan a \"http://prueba\" : " + conteo + "<br>" +
           "Numero de enlaces en el tercer parrafo: " + linksParrafo3.length;
             

}
