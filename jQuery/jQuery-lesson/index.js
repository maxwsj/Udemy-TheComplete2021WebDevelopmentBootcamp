          /****** What is jQuery? ******/

// Código sem jQuery
for (i = 0; i < document.querySelectorAll("button").length; i++) {
	document.querySelectorAll("button")[i].addEventListener(
		"click", 
		function() {
			document.querySelector("h1").style.color = "red"; 
		});
}

// Código com jQuery
$("button").click(function() {
	$("h1").css("color", "red");
})

/************************************************************************************/

// Código sem jQuery
document.querySelector("h1")

// Código com jQuery
jQuery("h1")

ou

$("h1") // O sinal de dolar representa uma query

          /****** How to Incorporate jQuery into Websites ******/

// Para instalar o jQuery, vamos no site deles
https://jquery.com/

// Clicamos em download
https://jquery.com/download/

// Descemos até a parte de CDN - Others
// imagem 1 - Other CDNs

// Clicamos no Google CDN
https://developers.google.com/speed/libraries#jquery

// Selecionamos o script mais recente
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

// !!!!! Devemos se atentar a posição do script jQuery !!!!!

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="index.js"></script>

// Ele deve vir primeiro, já que o documento html lê os códigos de cima para baixo
// Para que os códigos jQuery se apliquem, ele deve vir primeiro, para ser carregado com
// prioridade 


          /****** How Minification Works to Reduce File Size ******/

// Podemos reduzir o tamanho do código para que só o navegador possa lê-lo e carregá-lo mais rápido
// [https://www.minifier.org/](https://www.minifier.org/)


/****** Selecting Elements with jQuery *************/
$("Seletor CSS")

// Caso desejarmos selecionar todos os botões o dolar sign vai seleciona-los automaticamente
$("button")

          /****** Manipulating Styles with jQuery  ******/

/* Não é indicado alterar o CSS através do Javasript */

/* Se apenas passarmos uma propriedade css estaremos obtendo o valor da propriedade 
referente ao elemento html */
$("elemento html").css("propriedade css")

/* Se passarmos uma propriedade e valor css estaremos definindo a propriedade 
referente ao elemento html */
$("elemento html").css("propriedade css", "valor css")

/**********************************************************************************/
/* Maneira correta de se realizar a alteração de algum estilo css no documento hmtl */
// Cria=se uma classe css com estilos dentro do documento css
.big-title {
	font-size: 10rem;
	color: red;
	font-family: cursive;
}

.margin-50 {
	margin: 50px;
}

// adiciona-se essa classe através do jQuery
$("h1").addClass("big-title"); // Adiciona a classe ao elemento h1
$("h1").removeClass("big-title"); // Remove a classe ao elemento h1

// adicionando múltiplas classes
$("h1").removeClass("big-title margin-50");

// verificar se o elemento possue uma classe pesquisada
$("h1").hasClass("margin-50"); // Retorna um boolean: true ou false

          /****** Manipulating Text with jQuery   ******/

// Adicionando textos com jQuery
$("elemento html").text("texto a ser adicionado");

// Adicionando com versão parecida com a innerHTML
$("button").html("<em></em>")

          /****** Manipulating Attributes with jQuery  ******/

// Manipulando atributos com jQuery
$("elemento html").attr("nome do atributo"); // attr busca o atributo

	// Exemplo
	$("img").attr("src");

// Adicionando com versão parecida com a innerHTML
$("button").html("<em></em>")


// GET e SET através do jQuery

// Exemplo
	 $("a").attr("href", "https://docs.emmet.io/cheat-sheet/");
// $("a").attr("get", "set");

/*!!! Lembre-se: Uma classe também é um atributo do elemento html  !!! */

/**********************************************************************************/

// Como obter o atributo (classe) de um elemento html
$("h1").attr("class");

          /****** Adding Event Listeners with jQuery   ******/

// Adicionando event listeners com jQuery
$("elemento html").click(função());
$("h1").click(function(){
	$("h1").css("color", "purple");
});


/**********************************************************************************/
// Adicionando um evento de click a um botao e conectando esse evento ao h1
$("button").click(function(){
	$("h1").css("color", "purple"); // estamos conectando o  h1 ao evento do click
});

/**********************************************************************************/
// Adicionando um evento listener a uma tecla do teclado (através de um botao de input)
$("input").keypress(function(event){
	console.log(event.key);
});

// Adicionando um evento listener a uma tecla do teclado em todo o documento html
$("body").keypress(function(event){
	console.log(event.key);
});

ou

$(document).keypress(function(event){
	console.log(event.key);
});


/**********************************************************************************/
// Code Challenge #1
// Aletar o valor do h1 para o valor que for pressionado no teclado
$("body").keypress(function (event) {
  $("h1").html(event.key);
});

/**********************************************************************************/
/* Podemos adicionar uma forma ainda mais fácil de realizar a ação de 
detectar um botão ou tecla do teclado */
$(document).on("O primeiro é o evento que estamos procurando", callBackFunction())  // Aceita dois parametros

// Exemplo:
$("h1").on("mousehover", function(){
	$("h1").css("color", "purple"); // Podemos adicionar qualquer evento do DOM Events
});

//  outra versao do Code Challenge #1 utilizando o método on
$(document).on("keypress", function (event) {
  $("h1").html(event.key);
});


          /****** Adding and Removing Elements with jQuery    ******/

/* Podemos adicionar algo antes de um elemento html enquanto o site está ativo 
<button> New </button> <h1> Hello </h1>
*/
$("h1").before("<button>New</button>");

/* Podemos adicionar algo depois de um elemento html 
<h1> Hello </h1> <button> New </button>
*/
$("h1").after("<button>New</button>");

/* Podemos adicionar algo dentro de um elemento html, antes do conteúdo do elemento
prepend(before)  prepend(antes)  <h1> <button> New </button> Hello</h1>
*/
$("h1").prepend("<button>New</button>");

/* Podemos adicionar algo dentro de um elemento html, depois do conteúdo do elemento
append(after)  append(depois)   <h1>  Hello <button> New </button> </h1>
*/
$("h1").append("<button>New</button>");

/**********************************************************************************/
// Remover algum elemento
$("button").remove(); // remove todos os botões


          /****** Website Animations with jQuery   ******/

               /* Lista de efeitos do jQuery: */

// https://www.w3schools.com/jquery/jquery_ref_effects.asp 
// https://api.jquery.com/category/effects/

/**********************************************************************************/

// Adicionando animações com jQuery { $("h1").show(); Faz reaparecer }
$("button").on("click", function () {
	$("h1").hidde(); // Método primitivo do jQuery que esconde algo
});

// Utilizando o toggle
$("button").on("click", function () {
	$("h1").toggle(); // Método primitivo do jQuery que esconde algo
});

// Utilizando o fadeOut { $("h1").fadeIn(); Faz reaparecer }
$("button").on("click", function () {
	$("h1").fadeOut(); // Método primitivo do jQuery que esconde algo com certo delay
});

/**********************************************************************************/
// Podemos custumizar nossos proprios efeitos atraves do Animate()
// Permite que inserimos valores css para customizar nossos efeitos
$("button").on("click", function () {
	$("h1").animate({
	opacity: 0.5 // Devem ser atributos que possuam valores númericos
	});
});

// Podemos adicionar varias animações de uma vez, e por fim a nossa customizada
$("button").on("click", function () {
	$("h1").slideUp().slideDown().animate({
	opacity: 0.5 // Devem ser atributos que possuam valores númericos
	});
});


