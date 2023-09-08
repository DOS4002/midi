//Pom ------------------------------------------------------------
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio'){
            elemento.play();
    } 
    else {
        console.log('ELEMENTO INVÁLIDO OU SELETOR INVÁLIDO!');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for(let i=0; i < listaDeTeclas.length;i++) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string    

    listaDeTeclas[i].onclick = function(){
        tocaSom(idAudio);
    }      

    //console.log(i);

    
    tecla.onkeydown = function(event){
        //console.log(event.code);
        if (event.code === "Enter" || event.code === "Space"){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}

var titulo = document.querySelector('h1');


