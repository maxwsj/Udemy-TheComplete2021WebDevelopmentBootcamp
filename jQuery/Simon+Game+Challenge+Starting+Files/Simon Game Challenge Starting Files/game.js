const TIME_ANIMATE_BUTTON = 100;
const TIME_TO_ANIMATION = 200;
const TIME_TO_NEW_SEQUENCE = 1000;
const TIME_TO_SHOW_GAME_OVER = 200;
const GAME_OVER_TEXT = "Game Over";
const RESTART_TEXT = "Clique aqui para Reiniciar";

const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;
let timeBetweenSteps = 1000;
let gameDificultyQuantity = 120;

const gameDificulty = () => {
  // Nega-se o resto da divisão para que não entre no aumento da dificuldade
  if (!(level % 2)) {
    timeBetweenSteps = timeBetweenSteps - gameDificultyQuantity;
    if (!(level % 10)) {
      gameDificultyQuantity = 50;
    }
  }
};

const buttonHider = () => {
  $("#game-start").toggle();
};

const nextLevel = () => {
  // Contador do Level
  level++;
  $("#level-title").text("Level " + level);
  gameDificulty();
};

const nextSequence = () => {
  nextLevel();
  // Variável para gerar o número aleatória e a cor aleatória
  let randomNumber = Math.trunc(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  // Push para a pontuação atual do jogo
  gamePattern.push(randomChosenColour);
  userClickedPattern = [];
  console.log(gamePattern);
};
// Inicia o jogo
$("#game-start").on("click", function () {
  // Quando uma tecla do teclado é pressionada, a variável é alterada para true e inicia-se o if
  if (!started) {
    nextSequence();
    showLastSequence();
    buttonHider();
    started = true;
  }
});

// Função para gerar o som de acordo com a cor ao clicar em um botão
const playSong = (name) => new Audio("sounds/" + name + ".mp3").play();

// Função para gerar a animação ao clicar em um botão
const animatePress = (currentColour) => {
  $("#" + currentColour).addClass("pressed");
  setTimeout(() => {
    $("#" + currentColour).removeClass("pressed");
  }, TIME_ANIMATE_BUTTON);
};

// Função para resetar o Jogo
const startOver = () => {
  level = 0;
  gamePattern = [];
  started = false;
  timeBetweenSteps = 1000;
};

// Função para checar o resultado
const checkAnswer = (currentLevel) => {
  if (gamePattern.length === userClickedPattern.length) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      // Inicia outra sequencia após o tempo do último clique
      setTimeout(() => {
        showLastSequence();
        nextSequence();
      }, TIME_TO_NEW_SEQUENCE);
    } else {
      $("body").addClass("game-over"); // Adiciona ao corpo a classe css game-over
      setTimeout(() => {
        $("body").removeClass("game-over"); // Remove ao corpo a classe css game-over
      }, TIME_TO_SHOW_GAME_OVER);
      playSong("wrong"); // Executa o som caso a sequencia esteja errada
      $("#level-title").text(GAME_OVER_TEXT);
      $("#game-start").text(RESTART_TEXT).toggle();
      startOver();
    }
  }
};

$(".btn").on("click", function () {
  let userChosenColour = $(this).attr("id");
  playSong(userChosenColour);
  animatePress(userChosenColour);
  userClickedPattern.push(userChosenColour); // armazena os cliques do usuário
  checkAnswer(userClickedPattern.length - 1); // Obtem a última resposta contida na array, do clique do usuário
});

const step = (thisStep) => {
  playSong(thisStep);
  $("#" + thisStep)
    .fadeIn(TIME_TO_ANIMATION)
    .fadeOut(TIME_TO_ANIMATION)
    .fadeIn(TIME_TO_ANIMATION);
};

const repeatStep = (itemStep) => {
  // Mostrar um passo
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Verificar se o passo existe
      if (itemStep) {
        step(itemStep);
        resolve("repetido com sucesso");
      } else {
        reject(Error("não existe esse passo")); // Retorna um erro
      }
    }, timeBetweenSteps);
  });
};

async function showLastSequence() {
  for (const pattern of gamePattern) {
    await repeatStep(pattern)
      .then((value) => console.log(`passo ${pattern} ${value}`)) // Quando é realizado com sucesso
      .catch((value) => console.log(`passo ${pattern} ${value}`)); // Quando não é realizado com sucesso
  }
}
