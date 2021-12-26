// Objeto songs que contem todas as músicas como métodos
const songs = {
  crash: function () {
    crash = new Audio("sounds/crash.mp3");
    return crash.play();
  },
  kick: function () {
    kick = new Audio("sounds/kick-bass.mp3");
    return kick.play();
  },
  snare: function () {
    snare = new Audio("sounds/snare.mp3");
    return snare.play();
  },
  tom1: function () {
    tom1 = new Audio("sounds/tom-1.mp3");
    return tom1.play();
  },
  tom2: function () {
    tom2 = new Audio("sounds/tom-2.mp3");
    return tom2.play();
  },
  tom3: function () {
    tom3 = new Audio("sounds/tom-3.mp3");
    return tom3.play();
  },
  tom4: function () {
    tom4 = new Audio("sounds/tom-4.mp3");
    return tom4.play();
  },
};

/* document.querySelectorAll(".drum").length obtemos o número de elementos da classe drum
através do querySelectorAll */
let numberOfDrums = document.querySelectorAll(".drum").length;

// Gerando animações
function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.toggle("pressed"); // Ativa a animação (sombreamento nos botões)
  // Função setTimeout para remover a animação
  setTimeout(function () {
    activeButton.classList.toggle("pressed"); // Remove a animação depos de 100 milissegundos
  }, 100);
}

// Identificando teclado
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// Verifica os botões através do for()
for (let i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    let buttonInnerHtml = this.innerHTML; // Identifica o botão pressionado
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

//
function makeSound(key) {
  switch (key) {
    case "w":
      songs.tom1();
      break;
    case "a":
      songs.tom2();
      break;
    case "s":
      songs.tom3();
      break;
    case "d":
      songs.tom4();
      break;
    case "j":
      songs.snare();
      break;
    case "k":
      songs.crash();
      break;
    case "l":
      songs.kick();
      break;
    default:
      console(buttonInnerHtml);
      break;
  }
}

/* SWTICH UTILIZANDO MÉTODOS DE UM OBJETO */

// const songs = {
//     crash: function () {
//       crash = new Audio("sounds/crash.mp3");
//       return crash.play();
//     },
//     kick: function () {
//       kick = new Audio("sounds/kick-bass.mp3");
//       return kick.play();
//     },
//     snare: function () {
//       snare = new Audio("sounds/snare.mp3");
//       return snare.play();
//     },
//     tom1: function () {
//       tom1 = new Audio("sounds/tom-1.mp3");
//       return tom1.play();
//     },
//     tom2: function () {
//       tom2 = new Audio("sounds/tom-2.mp3");
//       return tom2.play();
//     },
//     tom3: function () {
//       tom3 = new Audio("sounds/tom-3.mp3");
//       return tom3.play();
//     },
//     tom4: function () {
//       tom4 = new Audio("sounds/tom-4.mp3");
//       return tom4.play();
//     },
//   };

// switch (buttonInnerHtml) {
//     case "w":
//       songs.tom1();
//       break;
//     case "a":
//       songs.tom2();
//       break;
//     case "s":
//       songs.tom3();
//       break;
//     case "d":
//       songs.tom4();
//       break;
//     case "j":
//       songs.snare();
//       break;
//     case "k":
//       songs.crash();
//       break;
//     case "l":
//       songs.kick();
//       break;
//     default:
//       console(buttonInnerHtml);
//       break;
//   }

/* SWITCH INICIAL */

// switch (buttonInnerHtml) {
//     case "w":
//       let tom1 = new Audio("sounds/tom-1.mp3");
//       tom1.play();
//       break;
//     case "a":
//       let tom2 = new Audio("sounds/tom-2.mp3");
//       tom2.play();
//       break;
//     case "s":
//       let tom3 = new Audio("sounds/tom-3.mp3");
//       tom3.play();
//       break;
//     case "d":
//       let tom4 = new Audio("sounds/tom-4.mp3");
//       tom4.play();
//       break;
//     case "j":
//       let snare = new Audio("sounds/snare.mp3");
//       snare.play();
//       break;
//     case "k":
//       let crash = new Audio("sounds/crash.mp3");
//       crash.play();
//       break;
//     case "l":
//       let kick = new Audio("sounds/kick-bass.mp3");
//       kick.play();
//       break;
//     default:
//       console(buttonInnerHtml);
//       break;
//   }
