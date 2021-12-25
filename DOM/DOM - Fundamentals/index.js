document.query;

// Code Challenge #1
// Alterar a cor do <li>third</li> para roxo
document.getElementsByTagName("li")[2].style.color = "purple";

// Code Challenge #2
// Alterar a cor do <a> dentro da <li>
document.querySelector("li a").style.color = "red";

// Code Challenge #3
// Alterar a cor do background do botão para amarelo
document.querySelector("button").style.backgroundColor = "yellow";

// Code Challenge #4
/* Inserir uma classe no CSS que quando for adicionada em algum 
elemento através do JS, altere o tamanho da fonte em 10rem */
document.querySelector("h1").classList.toggle("huge");
