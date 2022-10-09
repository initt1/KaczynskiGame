//codigo do carro
let yCarros = [40, 96, 150];
let xCarros = [600, 600, 600];
let veloCarros = [2, 2.5, 3.2];


function mostraCarro(){
    for (let i = 0; i < imgCarros.length; i = i + 1){
        image(imgCarros[i], xCarros[i], yCarros[i], 50, 40);
        //console.log("dsdsd"); //verifica erro pelo console, no site apertar f12.
    }
}

function movCarro(){
    for (let i = 0; i < imgCarros.length; i = i + 1){
        xCarros[i] -= veloCarros[i];
    }  
}

function loopCarro(){
    for (let i = 0; i < imgCarros.length; i = i + 1){
    if (checkPassagem(xCarros[i])){
        xCarros[i] = 600;
    }
  }
}

function checkPassagem(xCarro){
    return xCarro < - 50;
} 