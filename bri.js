function calculateIMC() { //le ponemos una funcion para que calcule el IMC
    var weight = document.getElementById('weight').value; //En esta variable nos permine seleccionar un elementon del documento que en este caso seroa el peso y el value al final espara que me arroje un resultado
    var height = document.getElementById('height').value;//En esta variable nos permine seleccionar un elementon del documento que en este caso seroa el la altura y el value al final espara que me arroje un resultado

    if (weight !==''&& height !==''){ // esto me sirve para verificar los valores para poder realizar el calculo del IMC
        var bmi = weight /((height/100)**2); // esta linea calcula el peso dividiendola po al altula al cuadrado y divide los metros en 100 para convertilos en cm
        var result = document.getElementById('result');//muestra el resultado ente peso y altura 
        result.innerHTML = 'tu IMC es:' + bmi.toFixed(2);

        //Clasificacion del IMC
        if(bmi <18.5) { // Verifica si el IMC almacenado en el bmi es menor a 18.5, y si es asi pone que esta con PESO BAJO
            result.innerHTML += ' - Peso bajo';
        } else if (bmi < 25){ //Verifica si el IMC almacenado en el bmi es menor a 25, y si es asi pone que esta con PESO NORMAL
            result.innerHTML += '- Peso normal';
        }else if (bmi < 30){ //Verifica si el IMC almacenado en el bmi es menor a 30,y si es asi pone que esta con SOBREPESO
            result.innerHTML += '- Sobrepeso';
        }else {//Verifica si el IMC almacenado en el bmi es mayor a 30, y si es asi pone que esta con OBESIDAD
            result.innerHTML += '- Obecidad';
        }
            
    }
 }