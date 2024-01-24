
//asingnando el numero secreo por medio de la funcion a la variable 
let numeroSecreto =0 ;
let intentos = 0;
let palabraVeces = "intento";
let listadoNumeroSortedad = [];
let numeroMaximo = 10;
let maximoJuegos = 5;

//asignando parametros elemento y texto para interactuar con las etiquetas, usando parametros 
function asignarTextoElemento(elemento, texto) {

    //asignamops a la varibable el elemento seleccionado enviado por medio del parametro que enviamos en la funcion
    let elemento1HTML = document.querySelector(elemento);
    elemento1HTML.innerHTML= texto;
}
//funcion de prueba para el usuario =
function verificarIntento(){

    //almacenamos en una variable el numeros ingresado por el usuario, lo obtenemos con la funcion getElementById y por su valor con el .value
    //usando parseInt para convertir el valor a number y asi no comparar de manera erronea strincg con number
    let numeroUsuario = parseInt(document.getElementById('numeroIngresoUsuario').value);

    console.log(numeroSecreto);

    //metodo de ayuda para saber si es numero secreto es mayo o meor y mandaremos el mensaje con la funcion de asginartextoelemento
    if(numeroUsuario == numeroSecreto ){
        asignarTextoElemento('p',`Acertaste el numero secreto en ${intentos} ${palabraVeces}`)

        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p','numero secreto es menor') 
        }else{
            asignarTextoElemento('p','numero secreto es mayor')
        }
        //incrementando el numero de intentos y cambiando la palabra a plural
        intentos++;
        palabraVeces = "intentos";

        limpiarCaja();
    }
    return;
    
}

function limpiarCaja () {
    document.getElementById('numeroIngresoUsuario').value = '';
}


//funcion para crear el numero secreto con los metos floor y ramdon
function GenerarNumeroSecreto () {
    let numeroSorteado = Math.floor(Math.random() *numeroMaximo + 1);

    console.log(numeroSorteado);
    console.log(listadoNumeroSortedad);

    if(listadoNumeroSortedad.length == numeroMaximo){
        asignarTextoElemento('p','ya se generaron todos los numeros del juego')
    }else {

        //usando el metodo includes para verificar si el numero sorteado esta en la lista,
        if(listadoNumeroSortedad.includes(numeroSorteado)){
            //usando recursividad llamando a a la funcion en si misma 
            return GenerarNumeroSecreto();
        }else{
            //si el numero no esta en la lista se usa el metodo push para meterlo a la lista y devolver el numero para poder jugar 
            listadoNumeroSortedad.push(numeroSorteado);
            return numeroSorteado;
        }
    }
}

function CondicionesIniciales(){
        
    asignarTextoElemento('h1','juego del numero secreto!');
    asignarTextoElemento('p',`selecciona un numero del 1 al ${numeroMaximo}`);
    
    numeroSecreto = GenerarNumeroSecreto();
    intentos =1;
}
function reiniciarJuego(){
    if(listadoNumeroSortedad.length == maximoJuegos){
        asignarTextoElemento('p','Haz alcanzado el maximo de intentos')
    }else {
        //limpiar caja
        limpiarCaja();

        //indicar el mensaje de intervalo de numero 
        CondicionesIniciales();

        //deshabilitar el boton nuevo juego usando em metodo setAttribute para agregar disable para desabilitarlo
        document.getElementById('reiniciar').setAttribute('disabled',true);
    }

}

CondicionesIniciales();

//crear un arreglo podemos agregarle valores o no hacerlo
let variable = [];
//ver el tamaño del arreglo
console.log(variable.length)
//ir a la ultima posicion del arreglo
console.log(variable[variable.length-1])