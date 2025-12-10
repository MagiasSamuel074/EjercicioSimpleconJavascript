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
}



let operacion = Calculadora.multiplicacion();
document.writeln(operacion);
