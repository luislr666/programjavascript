
function ejercicio4 () {

	var valores = [true, 5, false, "hola", "adios", 2];
	

	if (valores[3].length > valores[4].length) {
		alert(valores[3] + " es de longitud mas grande que " + valores[4] +
			"\n" +
			"\n" + valores[3] + " > " + valores[4] + " = " + (valores[3] > valores[4]) +
			"\n" + valores[4] + " > " + valores[3] + " = " + (valores[4] > valores[3]) +
			"\n" +
			"\n" + valores[0] + " OR "  + valores[2] + " = " + (valores[0] || valores[2]) +
			"\n" + valores[2] + " AND " + valores[0] + " = " + (valores[2] && valores[0]) +
			"\n" +
			"\n" + valores[1] + " + " + valores[5] + " = " + (valores[1] + valores[5]) +		
			"\n" + valores[1] + " - " + valores[5] + " = " + (valores[1] - valores[5]) +		
			"\n" + valores[1] + " * " + valores[5] + " = " + (valores[1] * valores[5]) +		
			"\n" + valores[1] + " / " + valores[5] + " = " + (valores[1] / valores[5]) +		
			"\n" + valores[1] + " % " + valores[5] + " = " + (valores[1] % valores[5]));

	}else{
		alert(valores[4] + " es de longitud mas grande que " + valores[3] +
			"\n" +
			"\n" + valores[3] + " > " + valores[4] + " = " + (valores[3] > valores[4]) +
			"\n" + valores[4] + " > " + valores[3] + " = " + (valores[4] > valores[3]) +
			"\n" +
			"\n" + valores[0] + " OR "  + valores[2] + " = " + (valores[0] || valores[2]) +
			"\n" + valores[2] + " AND " + valores[0] + " = " + (valores[2] && valores[0]) +
			"\n" +
			"\n" + valores[1] + " + " + valores[5] + " = " + (valores[1] + valores[5]) +		
			"\n" + valores[1] + " - " + valores[5] + " = " + (valores[1] - valores[5]) +		
			"\n" + valores[1] + " * " + valores[5] + " = " + (valores[1] * valores[5]) +		
			"\n" + valores[1] + " / " + valores[5] + " = " + (valores[1] / valores[5]) +		
			"\n" + valores[1] + " % " + valores[5] + " = " + (valores[1] % valores[5]));		
	}
}
