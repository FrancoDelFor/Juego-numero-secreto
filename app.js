let numeroSecreto = 0;
let listaNumerosSorteados=[];
let numeroMaximo=10;
   

condicionesInicio();
function verificarIntento(){

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    if(numeroDeUsuario === numeroSecreto){
        
        asignarTextoElemento('p',`Has acertado el número en ${intentos} ${(intentos===1)?'intento':'intentos'}`);
        //habilito el boton "nuevo juego"
        document.getElementById('reiniciar').removeAttribute('disabled');
        //Desabilito el boton "intentar"
        document.getElementById('intentar').setAttribute('disabled',true);
       
    }else if(numeroDeUsuario<numeroSecreto){
        //El usuario no acerto
        asignarTextoElemento('p','¡Fallaste! El número secreto es mayor');

    }else{
        asignarTextoElemento('p','¡Fallaste! El número secreto es menor');
    }
    intentos++;
    limpiarCaja();
    return;
}
function asignarTextoElemento(elemento,texto){

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}

function generarNumeroSecreto(){
    
   let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados.length);
   //si ya se sorteron todos los numeros
   if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
        document.getElementById('intentar').setAttribute('disabled',true);
        
   }
   //si el numero generado esta incluido en la lista

   if(listaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();
   }else{
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
   }
    
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value='';
}
function nuevoJuego(){
    
    //limpiar caja     
    limpiarCaja();
    //indicar condiciones de inicio
    condicionesInicio();
}
function condicionesInicio() {
    
    asignarTextoElemento('h1','¡Juego del número secreto!.');
    asignarTextoElemento('p',`Ingresa un número del 1 al ${numeroMaximo}`)
    //reiniciar el numero de intentos
    intentos=1;
    //generar el numero secreto
    numeroSecreto= generarNumeroSecreto();
    //desabilitar el boton de "nuevo juego"
    document.getElementById('reiniciar').setAttribute('disabled',true);
    //Habilito el boton intentar
    document.getElementById('intentar').removeAttribute('disabled');
    console.log(numeroSecreto);
}
