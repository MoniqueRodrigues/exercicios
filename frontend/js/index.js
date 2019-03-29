

var botaoAdicionar= document.getElementById("btn");
// console.log("botão adicionar", botaoAdicionar)
var lista= document.getElementById("ul");
// console.log("lista",lista)

botaoAdicionar.addEventListener("click",function(){
    // console.log("fui clicado")
    event.preventDefault();
    var input= document.getElementById("produto").value;
    console.log("input ok nome:", input)



})
