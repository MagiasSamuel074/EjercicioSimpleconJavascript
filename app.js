class Calculadora{
    static Suma(){
        let arreglo = [];
        let resultado = 0;
        let NumerosPorSumar = parseInt(prompt("cuantos numeros deseas sumar: "));
        for(let i = 0; i < NumerosPorSumar; i++){
            arreglo[i] = parseInt(prompt("ingrese numero"));
            resultado = resultado + arreglo[i];
        }
        return resultado;
    }

    static Resta(){
        let resultado = 0;
        let numero = 0;
        let NumerosPorRestar = parseInt(prompt("cuantos numeros deseas restar: "));
        for(let i = 0; i < NumerosPorRestar; i++){
        numero = parseInt(prompt("ingrese numero"));
        if(i === 0){
            resultado = numero;
        }
        else if(i > 0){
            resultado = resultado - numero;
        }
        }
        return resultado;
    }

    static multiplicacion(){
        let resultado = 1;
        let numero = 0;
        let cantidadTotalaMultiplicar = parseInt(prompt("digite cuantos numeros desea multiplicar: "));
        for(let j = 0; j < cantidadTotalaMultiplicar; j++){
            numero = parseInt(prompt("ingrese numero: "));
                resultado = resultado * numero;
        }
            return resultado;
        }
    
    static division(){
        let resultado = 1;
        let numero = 0;
        let cantidadTotaladividir = parseInt(prompt("ingrese la cantidad total de numeros a dividir: "));
        for(let e = 0; e < cantidadTotaladividir; e++){
            numero = parseInt(prompt("ingrese numero: "));
            if(e === 0){
                resultado = numero;
            }
            else{
                resultado = resultado / numero;
            }
        }
        return resultado;
    }

    static RaizCuadrada(){
        let finalizado = false;
        let resultado = 0;
        while(finalizado == false){
            let numero = Number(prompt("que numero desea saber su raiz cuadrada: "));
            if(isNaN(numero)){
                alert("ingrese un numero");
                continue;
            }

            if(numero < 0){
                alert("no se aceptan numeros negativos");
                continue;
            }

            resultado = Math.sqrt(numero);
            finalizado = true;
        }
        return resultado;
    }
}



let operacion = Calculadora.RaizCuadrada();
document.writeln(operacion);
