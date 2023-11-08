console.log("Ejerciocio1");
console.log("Hola Mundo!");
console.log("Soy el primer script");

console.log("");
console.log("Ejercicio2");
console.log("");
var mensaje = "Hola Mundo!, Que facil es incluir 'comillas simples' y comillas dobles ";
console.log(mensaje);
console.log("")
console.log("Ejercicio 3")
var meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];
  
console.table(meses);

console.log("");
console.log("Ejercicio 4");
var valores = [true, 5, false, "hola", "adios", 2];

if (valores[3].length > valores[4].length) {
    console.log(valores[3] + " es mayor en longitud que " + valores[4]);
  } else if (valores[4].length > valores[3].length) {
    console.log(valores[4] + " es mayor en longitud que " + valores[3]);
  } else {
    console.log("Ambos textos tienen la misma longitud");
  }

var operacionTrue = valores[0] || valores[2];
var operacionFalse = valores[0] && valores[2];
  
console.log("Operacion true:", operacionTrue);
console.log("Operacionn false:", operacionFalse);  
console.log("");
console.log("Suma:", valores[1] + valores[5]);
console.log("Resta:", valores[1] - valores[5]);
console.log("Multiplicacion:", valores[1] * valores[5]);
console.log("Division:", valores[1] / valores[5]);
console.log("Modulo:",valores[1] % valores[5]);

console.log("");
console.log("Ejercicio 5");


var numero1 = 5;
var numero2 = 8;

if (numero1 <= numero2) {
  console.log("numero1 no es mayor que numero2");
}

if (numero2 > 0) {
  console.log("numero2 es positivo");
}

if (numero1 < 0 || numero1 !== 0) {
  console.log("numero1 es negativo o distinto de cero");
}

if (!(numero1 + 1 >= numero2)) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

console.log("");
console.log("Ejercicio 6");

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var numeroDNI = prompt('Ingrese numero DNI: ');
var letraDNI = prompt('Ingrese letra DNI:');

if (numeroDNI < 0 || numeroDNI > 99999999) {
  console.log("El numero no es valido.");
} else {
  var resto = numeroDNI % 23;
  var letraDNICalculada = letras[resto];

  if (letraDNI !== letraDNICalculada) {
    console.log("Letra incorrecta.");
  } else {
    console.log("DNI correcto.");
  }
}

console.log("");
console.log("Ejercicio 7");

var numero = prompt('Ingrese un numero entero: ');
var factorial = 1;
for (i = 1; i <= numero; i++) {
  factorial = factorial * i;
}

console.log("Numero: ",numero)
console.log("Factorial: ",factorial)


console.log("");
console.log("Ejercicio 8");


function parImpar(numero) {
    if (numero % 2 === 0) {
      return "Numero par";
    } else {
      return "Numero impar";
    }
  }

var numeroSaber = prompt('Ingresa un numero para saber si es par o impar:');
var resultado = parImpar(numeroSaber);
console.log("El numero ",numeroSaber, "es un ", resultado); 

console.log("");
console.log("Ejercicio 9");

function saberCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
      console.log("Solo mayusculas.");
    }
    else if (cadena === cadena.toLowerCase()) {
      console.log("Solo minusculas.");
    }
    else {
      console.log("Ambas.");
    }
  }
  
var cadena = prompt('Ingresa la cadena de texto que deseas saber: '); 
console.log("La cadena: ",cadena," esta formado por:");
saberCadena(cadena)

console.log("");
console.log("Ejercicio 10");


function esPalindromo(cadena) {
  
  var cadenaReversa = cadena.split('').reverse().join('');

  if (cadena === cadenaReversa) {
    return "Es palindromo";
  } else {
    return "No es palindromo";
  }
}

var cadenaSaber = prompt('Ingresa la cadena de texto que deseas saber: '); 
var resultado = esPalindromo(cadenaSaber);
console.log(resultado);

console.log("");
console.log("Ejercicio 11");

function Persona(nombre, edad, genero) {
  this.nombre = nombre;
  this.edad = edad;
  this.genero = genero;
}


Persona.prototype.obtDetalles = function () {
  console.log("Nombre: " + this.nombre + ", Edad: " + this.edad + ", Género: " + this.genero);
};


function Estudiante(nombre, edad, genero, curso, grupo) {
  Persona.call(this, nombre, edad, genero);
  this.curso = curso;
  this.grupo = grupo;
}


Estudiante.prototype = Object.create(Persona.prototype);


Estudiante.prototype.registrar = function () {
  console.log(this.nombre + " tienes curso: " + this.curso + ", grupo: " + this.grupo);
};


function Profesor(nombre, edad, genero, asignatura, nivel) {
  Persona.call(this, nombre, edad, genero);
  this.asignatura = asignatura;
  this.nivel = nivel;
}

Profesor.prototype = Object.create(Persona.prototype);

Profesor.prototype.asignar = function () {
  console.log("El profesor " + this.nombre + " asigna la asignatura " + this.asignatura + " a nivel " + this.nivel);
};

var persona = new Persona("Juan", 30, "Masculino");
persona.obtDetalles();

var estudiante = new Estudiante("Laura", 25, "Femenino", "JavaScript", "A");
estudiante.obtDetalles();
estudiante.registrar();

var profesor = new Profesor("Carlos", 45, "Masculino", "Matemáticas", "Avanzado");
profesor.obtDetalles();
profesor.asignar();


console.log("");
console.log("Ejercicio 12");


function lanzarDados() {
  var resultados = [];

  for (var i = 0; i < 36000; i++) {
    var dado = parseInt(Math.random() * 6) + 1;
    var dado2 = parseInt(Math.random() * 6) + 1;

    var sumaDados = dado + dado2;

    if (!resultados[sumaDados]) {
      resultados[sumaDados] = 1;
    } else {
      resultados[sumaDados]++;
    }
  }
  return resultados;
}

var cantidadDeSumas = lanzarDados();
console.log(cantidadDeSumas);

console.log("");
console.log("Ejercicio 13");

var fecha = /\b\d{2}\/\d{2}\/\d{4}\b/;
var texto = "Nací el 05/04/1982 en Donostia.";
console.log(fecha.test(texto));

var expresionEmail = /^[\w.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}$/;
var email = prompt("Ingrese email a validar: ");
console.log(expresionEmail.test(email));


var nombreInvertir = prompt("Ingresa el nombre a invertir:" );
var nombreApellido = /(\w+)\s(\w+)/;
var resultadoInvertido = nombreInvertir.replace(nombreApellido, "$2, $1");
console.log(resultadoInvertido);


console.log("");
console.log("Ejercicio 14");

function muestra() {
  var enlace = document.querySelector('.enlace');
  var contenidoAdicional = document.querySelector('.adicional');
  enlace.style.display = 'none';
  enlace.removeEventListener('click', muestra);
  contenidoAdicional.classList.remove('oculto');
}
document.querySelector('.enlace').addEventListener('click', muestra);