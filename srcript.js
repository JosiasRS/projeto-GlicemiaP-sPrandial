function abrirPopup() {
    var popup = window.open("", "popup", "width=400,height=500", "align: center");
    popup.document.write("<html><head><title>Calculadora</title><style>" +
    "body { font-family: Arial, sans-serif; background-color:rgb(238, 227, 208) ; text-align: center; }" +
    "h1 { color: #333;   }" +
    "h3 { color: #555;  }" +
    "input[type='number'] { padding: 5px; margin-bottom: 10px; }" +
    "button { padding: 8px 15px; background-color: crimson; color: #FFF; border: none; cursor: pointer; }" +
    "button:hover { background-color: white; color: crimson; box-shadow: 0 0 10px rgb(218, 50, 84); }" +
    "#resultado { margin-top: 20px; font-weight: bold;}" +
    "</style></head><body></body></html>");
  
    var body = popup.document.body;
  
    var h1 = popup.document.createElement("h1");
    h1.innerHTML = "Calculando a glicemia pós-prandial";
    body.appendChild(h1);

    var h3 = popup.document.createElement("h3");
    h3.innerHTML = "Digite o valor da glicemia no campo abaixo:";
    body.appendChild(h3);

    var vlr1 = popup.document.createElement("input");
    vlr1.setAttribute("type", "number");
    vlr1.setAttribute("id", "valor1");
    vlr1.setAttribute("placeholder", "mg/dL");
    body.appendChild(vlr1);
    body.appendChild(popup.document.createElement("br"));
  
    var calcularb= popup.document.createElement("button");
    calcularb.innerHTML = "Calcular";
    calcularb.onclick = function() {
      calcular();
    };
    body.appendChild(calcularb);
   
    var resultadoDiv = popup.document.createElement("div");
    resultadoDiv.setAttribute("id", "resultado");
    body.appendChild(resultadoDiv);
  
    function calcular() {
      var vlr1 = parseFloat(popup.document.getElementById('valor1').value);
      if (vlr1>=140 && vlr1<=200){
        var resultado = "Resultado: intolerancia a glicose";
        popup.document.getElementById('resultado').innerHTML = resultado;
      } 
      else if(vlr1>=70 && vlr1<140){
        var resultado = "Resultado: Normal";
        popup.document.getElementById('resultado').innerHTML = resultado;
      }
      else if(vlr1>200){
        var resultado = "Resultado: Diabete";
        popup.document.getElementById('resultado').innerHTML = resultado;
      }
      else if(vlr1<70){
        var resultado = "Resultado: Hipoglicemia";
        popup.document.getElementById('resultado').innerHTML = resultado;
      }else{
        var resultado = "Digite o valor!";
        popup.document.getElementById('resultado').innerHTML = resultado;
      }
    }    
  }
  
