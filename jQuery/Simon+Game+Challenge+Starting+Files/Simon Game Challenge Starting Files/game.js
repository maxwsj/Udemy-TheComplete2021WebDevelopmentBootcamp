let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;

// Inicia o jogo
$(document).on("keypress", function () {
  // Quando uma tecla do teclado é pressionada, a variável é alterada para true e inicia-se o if
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").on("click", function (event) {
  let userChosenColour = $(this).attr("id"); // Acessa
  playSong(userChosenColour);
  animatePress(userChosenColour);
  userClickedPattern.push(userChosenColour); // armazena os cliques do usuário
  checkAnswer(userClickedPattern.length - 1); // Obtem a última resposta contida na array, do clique do usuário
});

function nextSequence() {
  // Contador do Level
  level++;
  $("#level-title").text("Level " + level);

  // Variável para gerar o número aleatória e a cor aleatória
  let randomNumber = Math.trunc(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];

  // Animação aleatória de acordo com a cor
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  // Função para tocar o som referente a cor
  playSong(randomChosenColour);

  // Push para a pontuação atual do jogo
  gamePattern.push(randomChosenColour);

  // Resetando a array (para que os pushs de cliques do jogador sejam inseridos novamente e compaarados com a array gamePattern)
  userClickedPattern = [];
}

// Função para gerar o som de acordo com a cor ao clicar em um botão
function playSong(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Função para gerar a animação ao clicar em um botão
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

// Função para checar o resultado
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("Success!");
    // Verificar se o usuário já terminou de inserir as sequencias
    if (gamePattern.length === userClickedPattern.length) {
      // Inicia outra sequencia após o tempo do último clique
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    $("body").addClass("game-over"); // Adiciona ao corpo a classe css game-over
    setTimeout(function () {
      $("body").removeClass("game-over"); // Remove ao corpo a classe css game-over
    }, 200);
    playSong("wrong"); // Executa o som caso a sequencia esteja errada
    $("#level-title").text("Game Over, Aperte qualquer tecla para reiniciar");
    console.log("Wrong!");
    startOver();
  }
}

// Função para resetar o Jogo
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
