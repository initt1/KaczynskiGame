//vars ator
let yAtor = 366;
let xAtor = 100;

function mostraAtor(){
    image(imgAtor, xAtor, yAtor, 40, 30);
}

function movAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
      yAtor += 3;
    }
}