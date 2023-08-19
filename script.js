// script.js
function calcularIMC() {
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);

  var bmi = peso / (altura * altura);

  var resultado = document.getElementById("resultado");
  var bmiText = document.getElementById("bmi");

  if (bmi < 18.5) {
    resultado.textContent = "Bajo de peso";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    resultado.textContent = "Normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    resultado.textContent = "Sobrepeso";
  } else {
    resultado.textContent = "Obeso";
  }

  bmiText.textContent = "Tu BMI es: " + bmi.toFixed(2);
}

function likes(numero) {
    if (numero < 1000) {
      return numero.toString();
    } else if (numero < 1000000) {
      return (numero / 1000).toFixed(0) + "K";
    } else {
      return (numero / 1000000).toFixed(0) + "M";
    }
  }

  function calcularLikes() {
    var inputNumero = document.getElementById("numero2");
    var resultado = document.getElementById("resultado2");
    var numero = parseInt(inputNumero.value);

    if (!isNaN(numero)) {
      resultado.textContent = likes(numero);
    } else {
      resultado.textContent = "Ingrese un número válido.";
    }
  }

  function validarContraseña() {
    var inputUsuario = document.getElementById("usuario");
    var inputContraseña = document.getElementById("contraseña");
    var resultado = document.getElementById("resultado3");

    var usuario = inputUsuario.value;
    var contraseña = inputContraseña.value;

    // Método para estandarizar el ingreso y comparación de contraseña
    var contraseñaEstandarizada = contraseña.toLowerCase(); // Convertir a minúsculas para comparar

    if (contraseñaEstandarizada === "laura123") {
      resultado.textContent = "Contraseña correcta.";
    } else {
      resultado.textContent = "Contraseña incorrecta.";
    }
  }


  function calcularImpuestos() {
    var inputEdad = document.getElementById("edad");
    var inputIngresos = document.getElementById("ingresos");
    var resultado = document.getElementById("resultado4");

    var edad = parseInt(inputEdad.value);
    var ingresos = parseFloat(inputIngresos.value);

    if (!isNaN(edad) && !isNaN(ingresos)) {
      if (edad >= 18 && ingresos >= 1000) {
        var impuestos = ingresos * 0.4;
        resultado.textContent = "Impuestos a pagar: " + impuestos.toFixed(2);
      } else {
        resultado.textContent = "No aplica impuestos.";
      }
    } else {
      resultado.textContent = "Ingrese valores numéricos válidos.";
    }
  }

  function imprimirArreglo(arreglo) {
    var ul = document.getElementById("resultado5");
    ul.innerHTML = ""; // Limpiar el contenido existente

    for (var i = 0; i < arreglo.length; i++) {
      var li = document.createElement("li");
      li.textContent = arreglo[i];
      ul.appendChild(li);
    }
  }

  function numeroDeCaracteres(string, caracter) {
    var count = 0;

    for (var i = 0; i < string.length; i++) {
      if (string.charAt(i) === caracter) {
        count++;
      }
    }

    return count;
  }

  function contarCaracteres() {
    var inputTexto = document.getElementById("texto");
    var inputCaracter = document.getElementById("caracter");
    var resultado = document.getElementById("resultado6");

    var texto = inputTexto.value;
    var caracter = inputCaracter.value;

    if (texto && caracter && caracter.length === 1) {
      var count = numeroDeCaracteres(texto, caracter);
      resultado.textContent = "El caracter '" + caracter + "' aparece " + count + " veces en el texto.";
    } else {
      resultado.textContent = "Inválido.";
    }
  }

  function sumarArreglo() {
    var inputArreglo = document.getElementById("arreglo");
    var resultado = document.getElementById("resultado7");

    var arreglo = inputArreglo.value.split(",").map(Number);
    var suma = arreglo.reduce(function (total, num) {
      return total + num;
    }, 0);

    resultado.textContent = "La suma de los elementos del arreglo es: " + suma;
  }

  function multiplicarArreglo() {
    var inputArreglo = document.getElementById("arreglo8");
    var resultado = document.getElementById("resultado8");

    var arreglo = inputArreglo.value.split(",").map(Number);
    var multiplicacion = arreglo.reduce(function (total, num) {
      return total * num;
    }, 1);

    resultado.textContent = "La multiplicación de los elementos del arreglo es: " + multiplicacion;
  }

  function sumarArregloEnRango() {
    var inputArreglo = document.getElementById("arreglo2");
    var inputPosicionInicial = document.getElementById("posicionInicial");
    var inputPosicionFinal = document.getElementById("posicionFinal");
    var resultado = document.getElementById("resultado9");

    var arreglo = inputArreglo.value.split(",").map(Number);
    var posicionInicial = parseInt(inputPosicionInicial.value);
    var posicionFinal = parseInt(inputPosicionFinal.value);

    if (isNaN(posicionInicial) || isNaN(posicionFinal)) {
      resultado.textContent = "Ingrese posiciones iniciales y finales válidas.";
      return;
    }
    if (posicionInicial < 0 || posicionInicial >= arreglo.length ||
        posicionFinal < 0 || posicionFinal >= arreglo.length ||
        posicionInicial > posicionFinal) {
      resultado.textContent = "Posiciones iniciales y finales fuera de rango.";
      return;
    }
    var suma = 0;
    for (var i = posicionInicial; i <= posicionFinal; i++) {
      suma += arreglo[i];
    }
    resultado.textContent = "La suma de los elementos en el rango es: " + suma;
  }

  function encontrarMaximo() {
    var inputArreglo = document.getElementById("arreglo3");
    var resultado = document.getElementById("resultado10");

    var arreglo = inputArreglo.value.split(",").map(Number);

    if (arreglo.length === 0) {
      resultado.textContent = "El arreglo está vacío.";
      return;
    }
    var maximo = arreglo[0];
    for (var i = 1; i < arreglo.length; i++) {
      if (arreglo[i] > maximo) {
        maximo = arreglo[i];
      }
    }
    resultado.textContent = "El número máximo en el arreglo es: " + maximo;
  }

  function encontrarMaximo2() {
    var inputArreglo = document.getElementById("arreglo4");
    var resultado = document.getElementById("resultado11");
    var arreglo = inputArreglo.value.split(",").map(Number);

    if (arreglo.length === 0) {
      resultado.textContent = "El arreglo está vacío.";
      return;
    }
    var maximoo = Math.max(...arreglo);
    resultado.textContent = "El número máximo en el arreglo es: " + maximoo;
  }