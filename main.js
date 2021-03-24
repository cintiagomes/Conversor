var valorEmIenes = prompt("Qual o valor em Ienes você deseja converter em Reais?")

var valorEmIenesDigitado = parseFloat(valorEmIenes)

var valorEmReal = valorEmIenesDigitado * 0.051
var valorEmRealFixado = valorEmReal.toFixed(2)

document.getElementById("converterIenes").value = valorEmIenes + " Ienes " + " = " + valorEmRealFixado +" Reais"

var valorEmAnoLuz = prompt ("Qual valor em ano-luz você deseja converter? ")

var valorEmAnoLuzDigitado = parseFloat(valorEmAnoLuz)

var valorEmQuilometros = valorEmAnoLuzDigitado * 9.461e+12

var valorEmQuilometrosFixado = valorEmQuilometros.toFixed(2)

document.getElementById("converterAnoLuz").value = valorEmAnoLuz + " Ano-Luz " + " = " + valorEmQuilometrosFixado +" KM"