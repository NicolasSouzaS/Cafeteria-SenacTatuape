// Variavel com o conteudo inicial cafés para a rolagem dos
// itens do cardápio
let tp = "#cafes";

document.getElementsByClassName("btn-mobile")[0].onclick = ()=> {
    document.getElementsByTagName("nav")[0].style.marginLeft = "0px"
}
document.getElementsByTagName("main")[0].onclick = ()=>{
    document.getElementsByTagName("nav")[0].style.marginLeft = "-200px"
}



function closeMenu(){
    document.getElementsByClassName("cat-cardapio")[0].style.backgroundColor = "#390D02";
    document.querySelector(".cat-cardapio a").style.color = "#f2f2f2"
    document.getElementById("bolos").style.display = "none";
    document.getElementById("doces").style.display = "none";
    document.getElementById("salgados").style.display = "none";
    document.getElementById("bebidas").style.display = "none";
    trocaSelecao(cat);
}

function mudarItem(cat){
    switch(cat){
        case "cafes":
    document.getElementById(cat).style.display = "inline-flex";
    document.getElementById("bolos").style.display = "none";
    document.getElementById("doces").style.display = "none";
    document.getElementById("salgados").style.display = "none";
    document.getElementById("bebidas").style.display = "none";
    tp = "#cafes"
    trocaSelecao(cat);
    break;

    case "bolos":

    document.getElementById(cat).style.display = "inline-flex";
    document.getElementById("cafes").style.display = "none";
    document.getElementById("doces").style.display = "none";
    document.getElementById("salgados").style.display = "none";
    document.getElementById("bebidas").style.display = "none";

    tp = "#bolos"
    trocaSelecao(cat);
    break;

    case "doces":
    document.getElementById(cat).style.display = "inline-flex";
    document.getElementById("cafes").style.display = "none";
    document.getElementById("bolos").style.display = "none";
    document.getElementById("salgados").style.display = "none";
    document.getElementById("bebidas").style.display = "none";

    tp = "#doces"
    trocaSelecao(cat);
    break;

    case "salgados":
    document.getElementById(cat).style.display = "inline-flex";
    document.getElementById("cafes").style.display = "none";
    document.getElementById("bolos").style.display = "none";
    document.getElementById("doces").style.display = "none";
    document.getElementById("bebidas").style.display = "none";
    tp = "#salgados"
    trocaSelecao(cat);
    break;

    case "bebidas":
    document.getElementById(cat).style.display = "inline-flex";
    document.getElementById("cafes").style.display = "none";
    document.getElementById("bolos").style.display = "none";
    document.getElementById("doces").style.display = "none";
    document.getElementById("salgados").style.display = "none";

    tp = "#bebidas"
    trocaSelecao(cat);
    break;
    }
}

function trocaSelecao(cat){
    if(cat == "cafes") {
        document.getElementsByClassName("cat-cardapio")[0].style.backgroundColor = "#390D02";
        document.querySelectorAll(".cat-cardapio a")[0].style.color = "#f2f2f2"
        document.getElementsByClassName("cat-cardapio")[1].style.backgroundColor = "white";
        document.querySelectorAll(".cat-cardapio a")[1].style.color = "#333"
        document.getElementsByClassName("cat-cardapio")[2].style.backgroundColor = "white";
        document.querySelectorAll(".cat-cardapio a")[2].style.color = "#333";
        document.getElementsByClassName("cat-cardapio")[3].style.backgroundColor = "white";
        document.querySelectorAll(".cat-cardapio a")[3].style.color = "#333";
        document.getElementsByClassName("cat-cardapio")[4].style.backgroundColor = "white";
        document.querySelectorAll(".cat-cardapio a")[4].style.color = "#333";
    }
    else if(cat == "bolos"){
        document.getElementsByClassName("cat-cardapio")[1].style.backgroundColor = "#390D02 ";
        document.querySelectorAll(".cat-cardapio a")[1].style.color = "#f2f2f2"
        document.getElementsByClassName("cat-cardapio")[0].style.backgroundColor = "white";
        document.querySelectorAll(".cat-cardapio a")[0].style.color = "#333"
        document.getElementsByClassName("cat-cardapio")[2].style.backgroundColor = "white";
        document.querySelectorAll(".cat-cardapio a")[2].style.color = "#333";
        document.getElementsByClassName("cat-cardapio")[3].style.backgroundColor = "white";
        document.querySelectorAll(".cat-cardapio a")[3].style.color = "#333";
        document.getElementsByClassName("cat-cardapio")[4].style.backgroundColor = "white";
        document.querySelectorAll(".cat-cardapio a")[4].style.color = "#333";
    }
    else if(cat == "doces"){
        document.getElementsByClassName("cat-cardapio")[2].style.backgroundColor = "#390D02";
        document.querySelectorAll(".cat-cardapio a")[2].style.color = "#f2f2f2";
        document.getElementsByClassName("cat-cardapio")[0].style.backgroundColor = "white";
        document.querySelectorAll(".cat-cardapio a")[0].style.color = "#333"
        document.getElementsByClassName("cat-cardapio")[1].style.backgroundColor = "white";
        document.querySelectorAll(".cat-cardapio a")[1].style.color = "#333";
        document.getElementsByClassName("cat-cardapio")[3].style.backgroundColor = "white";
        document.querySelectorAll(".cat-cardapio a")[3].style.color = "#333";
        document.getElementsByClassName("cat-cardapio")[4].style.backgroundColor = "white";
        document.querySelectorAll(".cat-cardapio a")[4].style.color = "#333";
    }
    else if(cat == "salgados"){
        document.getElementsByClassName("cat-cardapio")[3].style.backgroundColor = "#390D02";
        document.querySelectorAll(".cat-cardapio a")[3].style.color = "#f2f2f2";
        document.getElementsByClassName("cat-cardapio")[0].style.backgroundColor = "white";
        document.querySelectorAll(".cat-cardapio a")[0].style.color = "#333"
        document.getElementsByClassName("cat-cardapio")[1].style.backgroundColor = "white";
        document.querySelectorAll(".cat-cardapio a")[1].style.color = "#333";
        document.getElementsByClassName("cat-cardapio")[2].style.backgroundColor = "white";
        document.querySelectorAll(".cat-cardapio a")[2].style.color = "#333";
        document.getElementsByClassName("cat-cardapio")[4].style.backgroundColor = "white";
        document.querySelectorAll(".cat-cardapio a")[4].style.color = "#333";
    }
    else if(cat == "bebidas"){
        document.getElementsByClassName("cat-cardapio")[4].style.backgroundColor = "#390D02";
        document.querySelectorAll(".cat-cardapio a")[4].style.color = "#f2f2f2";
        document.getElementsByClassName("cat-cardapio")[0].style.backgroundColor = "white";
        document.querySelectorAll(".cat-cardapio a")[0].style.color = "#333"
        document.getElementsByClassName("cat-cardapio")[1].style.backgroundColor = "white";
        document.querySelectorAll(".cat-cardapio a")[1].style.color = "#333";
        document.getElementsByClassName("cat-cardapio")[2].style.backgroundColor = "white";
        document.querySelectorAll(".cat-cardapio a")[2].style.color = "#333";
        document.getElementsByClassName("cat-cardapio")[3].style.backgroundColor = "white";
        document.querySelectorAll(".cat-cardapio a")[3].style.color = "#333";
    }
}
// Obter o tamanho da tela e usar apenas a metade
let obterMetadeX = window.screen.width/2;
let pos = 0;


// Vamos obter a posição do mouse
document.body.onmousemove = ()=>{

    let px = window.event.clientX; //Pega a posição horizontal do mouse

    if(px > obterMetadeX){

        if(document.querySelector(tp).style.marginLeft == "-335px"){
            document.querySelector(tp).style.marginLeft = "-335px";
        }
        else{
            document.querySelector(tp).style.marginLeft = pos + "px";
            pos -=5;
        }
    }
    else{
        if(document.querySelector(tp).style.marginLeft=="10px"){
            document.querySelector(tp).style.marginLeft ="10px";
        }
        else{
            document.querySelector(tp).style.marginLeft = pos+"px";
            pos+=5;
        }

        
    }

    console.log(document.querySelector(tp).style.marginLeft);
};
