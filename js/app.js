 
  //variables
var resultado = document.getElementById('display')
var reset = document.getElementById('on')
var suma = document.getElementById('mas')
var resta = document.getElementById('menos')
var multiplicacion = document.getElementById('por')
var division = document.getElementById('dividido')
var igual = document.getElementById('igual')
var signo = document.getElementById('sign')
var cero = document.getElementById('0')
var uno = document.getElementById('1')
var	dos = document.getElementById('2')
var tres = document.getElementById('3')
var cuatro = document.getElementById('4')
var cinco = document.getElementById('5')
var seis = document.getElementById('6')
var siete = document.getElementById('7')
var	ocho = document.getElementById('8')
var nueve = document.getElementById('9')
var punto = document.getElementById('punto')
var puntoAgregado = false
var operadoAgregado = false
var operador = ""
var num1 = ""
var num2 = ""

var calculadora = {
	init: function(){
		this_ = this;
		// Asignacion del evento click a las teclas de la calculadora
		uno.addEventListener('click', function(){
			this_.escribirTecla("1")
		}),
		dos.addEventListener('click', function(){
			this_.escribirTecla("2")
		}),
		tres.addEventListener('click', function(){
			this_.escribirTecla("3")
		}),
		cuatro.addEventListener('click', function(){
			this_.escribirTecla("4")
		}),
		cinco.addEventListener('click', function(){
			this_.escribirTecla("5")
		}),
		seis.addEventListener('click', function(){
			this_.escribirTecla("6")
		}),
		siete.addEventListener('click', function(){
			this_.escribirTecla("7")
		}),
		ocho.addEventListener('click', function(){
			this_.escribirTecla("8")
		}),
		nueve.addEventListener('click', function(){
			this_.escribirTecla("9")
		}),
		cero.addEventListener('click', function(){
			this_.escribirTecla("0")
		}),
		punto.addEventListener('click', function(){
			this_.escribirTecla(".")
		}),
		reset.addEventListener('click', function(){
			this_.limpiarPantalla()
		}),
		suma.addEventListener('click', function(){
			this_.agregarOperador("+")
		}),
		resta.addEventListener('click', function(){
			this_.agregarOperador("-")
		}),
		multiplicacion.addEventListener('click', function(){
			this_.agregarOperador("*")
		}),
		division.addEventListener('click', function(){
			this_.agregarOperador("/")
		}),
		igual.addEventListener('click', function(){
			this_.realizarOperacion()
		}),
		signo.addEventListener('click', function(){
			this_.cambiarSigno()
		})


	},
  	escribirTecla: function(tecla){
   		if (resultado.textContent == '0'){
   			resultado.textContent = '';
   		}
   		if (resultado.textContent.length == 8 ){
   			return
   		}
   		switch (tecla) {
   			case '1':
   				resultado.textContent = resultado.textContent + "1";
   				break; 
   			case '2':
   				resultado.textContent = resultado.textContent + "2";
   				break; 
   			case '3':
   				resultado.textContent = resultado.textContent + "3";
   				break; 
   			case '4':
   				resultado.textContent = resultado.textContent + "4";
   				break; 
   			case '5':
   				resultado.textContent = resultado.textContent + "5";
   				break; 
   			case '6':
   				resultado.textContent = resultado.textContent + "6";
   				break; 
   			case '7':
   				resultado.textContent = resultado.textContent + "7";
   				break; 
   			case '8':
   				resultado.textContent = resultado.textContent + "8";
   				break; 
   			case '9':
   				resultado.textContent = resultado.textContent + "9";
   				break; 
   			case '0':
   				if (resultado.textContent == '0') {
   					break
   				} else {
   					resultado.textContent = resultado.textContent + "0";
   					break;
   				}   				 
   			case '.':
   				if (puntoAgregado) {
   					break
   				} else if (resultado.textContent == '') {
   					resultado.textContent = resultado.textContent + "0.";
   					puntoAgregado = true;
   					break;
   				} else {
   					resultado.textContent = resultado.textContent + ".";
   					puntoAgregado = true;
   					break;
   				}   				 
   		}
   	},
   	limpiarPantalla: function(){
   		resultado.textContent = "0";
   		puntoAgregado = false;
   		operadoAgregado = false;
   		num1 = "";
   		num2 = "";
   	},
   	agregarOperador(op){
   		if (!operadoAgregado){
   			num1 = parseFloat(resultado.textContent);
   			operador = op;
   			operadoAgregado = true;
   			resultado.textContent = "0";
   			puntoAgregado = false;
   			num2 = "";
   		} 
   	},
   	realizarOperacion: function() {
   		var pos;
   		if (num2 == "") {
   			num2 = parseFloat(resultado.textContent);
   			operadoAgregado = false;
   		}   		
   		switch (operador) {
   			case "+":
   				num1 += num2;
   				break;
   			case "-":
   				num1 -= num2;
   				break;
   			case "*":
   				num1 *= num2;
   				break;
   			case "/":
   				num1 /= num2;
   				break; 
   		};
   		pos = String(num1).indexOf('.');
   		if (pos == -1) {
   			resultado.textContent = String(num1).slice(0,8);	
   		} else {
   			resultado.textContent = num1.toFixed(7-pos);
   		}
   		
   	},
   	cambiarSigno: function(){
   		var numero = parseFloat(resultado.textContent);
   		numero = -numero;
   		resultado.textContent = String(numero);
   	}
}

calculadora.init();