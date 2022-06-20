var operandoa;
var operandob;
var operacion;

function init(){
    var resultado = document.getElementById("resultado");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var division = document.getElementById("division");
    var multiplicacion = document.getElementById("multiplicacion");
    var resta = document.getElementById("resta");
    var igual = document.getElementById("igual");
    var reset = document.getElementById("reset");
    var cero = document.getElementById("cero");
    var suma = document.getElementById("suma");

<!--Eventos-->

uno.onclick = function(e){
    resultado.texContent = resultado.texContent + "1"
}
dos.onclick = function(e){
    resultado.texContent = resultado.texContent + "2"
}
tres.onclick = function(e){
    resultado.texContent = resultado.texContent + "3"
}
cuatro.onclick = function(e){
    resultado.texContent = resultado.texContent + "4"
}
cinco.onclick = function(e){
    resultado.texContent = resultado.texContent + "5"
}
seis.onclick = function(e){
    resultado.texContent = resultado.texContent + "6"
}
siete.onclick = function(e){
    resultado.texContent = resultado.texContent + "7"
}
ocho.onclick = function(e){
    resultado.texContent = resultado.texContent + "8"
}
nueve.onclick = function(e){
    resultado.texContent = resultado.texContent + "9"
}
cero.onclick = function(e){
    resultado.texContent = resultado.texContent + "0"
}
reset.onclick = function(e){
    resetear();
}

suma.onclick = function(e){
    operandoa = resultado.textContent;
operacion = "+";
limpiar();

}
resta.onclick = function(e){
    operandoa = resultado.textContent;
operacion = "-";
limpiar();

}
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
operacion = "*";
limpiar();

}
division.onclick = function(e){
    operandoa = resultado.textContent;
operacion = "/";
limpiar();

  }

igual.onclick = function(e){
    operandob = resultado.textContent;
resolver();

  }
igual.onclick = function(e){
    operandob = resultado.textContent;
resolver();

}

}
function limpiar(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent = "";
    aperandoa = 0;
    operandob = "";
    operacion = "";
}
function resolver(){
    var res= 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;


    }
   resetear();
   resultado.textContent = res; 
}
