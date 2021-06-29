/* Verificadar estado de la licuadora, encendido o apagado */
let estadoLicuadora = 'apagado';//por defecto apagada
let licuadora = document.getElementById('blender');
let sonidoLicuadora = document.getElementById('blender-sound');
let sonidoEncendido = document.getElementById('blender-button-sound');


/* controlar los estados de la licuadora que se activa cuando tocamos el boton por la propiedad onclik en el html que llama a esta funcion */
let controlarLicuadora = () => {
    if(estadoLicuadora == 'apagado'){
        estadoLicuadora = 'encedido';
        hacerSonidos();
        licuadora.classList.add('active');//hace que cambie la imagen agregandole la clase active css hace que cambie la imagen
    }else{
        estadoLicuadora = 'apagado';
        hacerSonidos();
        licuadora.classList.remove('active');//remueve la clase active haciendo que la imagen vuelta a la original
    }
}

/*controlar sonidos*/
let hacerSonidos = () => {
    if(sonidoLicuadora.paused){
        sonidoEncendido.play();
        sonidoLicuadora.play();
    }else{
        sonidoEncendido.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}