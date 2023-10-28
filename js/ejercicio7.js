function ejercicio7 (){
	var num = prompt("Factorial de un numero." +
		             "\n\nIngresa un numero entero: ");
	var fac = 1;
	
	for(var i = 1; i <= num; i++){
		fac *= i;
	}
	alert("El  factorial de " + num + " es " + fac);

}
