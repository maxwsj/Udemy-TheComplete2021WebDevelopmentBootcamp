/************* CHALLENGE 1 **************/
// Escrever um código que recebe uma string do usuário e diga para ele quantos caracteres ele escreveu e quantos ele ainda pode escrever utilizando o slice.
const tweet = prompt("Write a quote: ");
const tweetCount = tweet.slice(0,140);
alert("You have written " + tweetCount.length + " characters, you have " + (140 - tweetCount.length)+ " characters remaining");


/************** CHALLENGE 2 **************/
//Transformar a primeira letra do nome em maíscula utilizando apenas os ensinamentos atuais do curso.

const name = prompt ("Writte your name: ");
const nameCutted = name.slice(0,1);
const nameModified = name.slice(1,10);
finalName = nameCutted.toUpperCase();
alert(finalName + nameModified);

/************** CHALLENGE 3 **************/
// Desafio: Uma caculadora de idade de cachorro para humano

let dogAge = prompt("How old is your dog ? ");
let humanAge = 0;
humanAge = ((dogAge - 2) * 4) + 21;
alert("Your dog is " + humanAge + " years old in human years.");

/************** CHALLENGE 4 **************/
// Life in Weeks converter

function lifeInWeeks(age) {
    const d = 365;
    const w = 52;
    const m = 12;
    const lifeDaysLimit = 90 * d;
    const lifeWeeksLimit = 90 * w;
    const lifeMonthsLimit = 90 * m;
    const daysLeft = lifeDaysLimit - (age * d);
    const weeksLeft = lifeWeeksLimit - (age * w);
    const monthsLeft = lifeMonthsLimit - (age * m);
    alert("You have " + daysLeft + " days, " + weeksLeft + " weeks and " + 
    monthsLeft + " months left.");
}
const age = prompt("How old are you? ");
lifeInWeeks(age);

/************** CHALLENGE 5 **************/
// BMI Calculator

function bmiCalculator (weight,height) {
    const bmi = weight / Math.pow(height,2);
    return `Your bmi is ${Math.round(bmi)}`
}

let weight = prompt("What is your weight? ");
let height = prompt("What is your height? ");
const bmi = bmiCalculator(weight, height);

alert(bmi);

/************** CHALLENGE 6 **************/
// Love Score Generator

prompt("What is your name?");
prompt("What is your lover's name?");
let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
alert("Your love score is " + loveScore + "%");

/************** CHALLENGE 7 **************/
// Love Score with IF and Else
prompt("What is your name?");
prompt("What is your lover's name?");

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; // 1-100

if (loveScore > 70) {
	alert("Your love score is " + loveScore + "%" + "You love each other like Kayne loves Kayne.");
} else {
	alert("Your love score is " + loveScore + "%");
}
alert("Your love score is " + loveScore + "%");

/************** CHALLENGE 8 **************/
// Love Score com If and Else e Operadores relacionais

prompt("What is your name?");
prompt("What is your lover's name?");

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; // 1-100

if (loveScore > 70) {
	alert("Your love score is " + loveScore + "%" + "You love each other like Kayne loves Kayne.");
}

if (loveScore > 30 && loveScore <= 70) {
	alert("Your love score is " + loveScore + "%");
}

if (loveScore < 30) {
  alert("Your love score is " + loveScore + "%" + " You go together like oil ad water.");  
}


/************** CHALLENGE 9 **************/
// Exercício de programação 5: BMI Calculator Advanced (IF/ELSE)

function bmiCalculator (weight, height) {

    let bmi = Math.round (weight / Math.pow(height,2));
  
    if (bmi < 18.5) {
      return ("Your BMI is " + bmi + ", so your are underweight.");
    }
  
    if (bmi >= 18.5 && bmi <= 24.9) {
      return ("Your BMI is " + bmi + ", so you have a normal weight.");
    }
  
    if (bmi > 24.9) {
      return ("Your BMI is " + bmi + ", so you are overweight");
    }
  
  }
  
  let weight = prompt("What is your weight? ");
  let height = prompt("What is your height? ");
  
  
  const bmi = bmiCalculator(weight, height);
  
  alert(bmi)

/************** CHALLENGE 10 **************/
// Leap Year Calculator - Calcular qual ano é bissexto

function isLeap(year) {
    // ((F) || (F)) = (F) && (V) = (F)
            if ((year % 4 !==0) || (year % 100 === 0) && (year % 400 !== 0)) {
    
                return "Not leap year.";
    
            } else {
    
                return "Leap year.";
            }
    
        }
        
    const year = prompt("Write a year: ")
    
    alert(isLeap(year));

/************** CHALLENGE 11 **************/
// Desafio: Utilizar o include para consultar as arrays

let guestName = prompt("What is your name?")
let guestList = ["Angela", "Andressa","Pam","James","Lara","Jason"];

if (guestList.includes(guestName) == true) {
alert("Welcome!");
} else {
alert("Sorry! Maybe next time.!");
}

/************** CHALLENGE 12 **************/
// Desafio - Número que for divisível por 3 receberá Fizz, Número que for divisível por 3 receberá Buzz
// Número que for divisível por 3 e 5 receberá FizzBuzz, Número que for divisível por 3 receberá Buzz

let output = [];
let count = 1;
const fizz = "Fizz";
const buzz = "Buzz";
const fizzbz = "FizzBuzz";

function fizzBuzz() {
    
    if (count % 3 == 0 && count % 5 == 0){
       output.push(fizzbz);
    } else if (count % 5 == 0) {
       output.push(buzz);
    } else if (count % 3 == 0) {
       output.push(fizz);
    } else {
        output.push(count);
    }
    count++;
    alert(output);
}

let i = 0;
do {
   i += 1;
   fizzBuzz();
} while (i < 16);

/************** CHALLENGE 13 **************/
// 99 Song Desafio - Utilizar If e While para gerar a música 99 - Bottles of Beer

function beerSong(){
    let beerCount = 99;
    
    while( beerCount > 0 ){
        if(beerCount != 1){
            console.log( beerCount + " bottles of beer on the wall, " + beerCount + " bottles of beer.");
            let oneBeer = beerCount - 1;
            if (oneBeer != 1)
                console.log("Take one down and pass it around, " + (beerCount - 1) + " bottles of beer on the wall.");
            else
                console.log("Take one down and pass it around, " + oneBeer + " bottle of beer on the wall.");
        }else{
            console.log( beerCount + " bottle of beer on the wall, " + beerCount + " bottle of beer.");
            console.log("Take one down and pass it around, no more bottles of beer on the wall.");
        }
        beerCount--;
        if( beerCount == 0){
            console.log("No more bottles of beer on the wall, no more bottles of beer.");
            console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
        }
    }
}

beerSong();

/************** CHALLENGE 14 **************/
// Desafio - Definir quem pagará pelo lanche randomicamente

function whosPaying(names) {
    
    const numberOfPeople = names.length; // length vai contar a quantidade de arrays passadas como paramêtro na função whosPaying() e determinar atribuir o número de arrays para a var numberOfPeople 
    const randomPersonPosition = Math.floor(Math.random() * numberOfPeople); // o Math.floor vai arredondar o valor aleátorio obtido do Math.random e multiplicará pelo número de pessoas (já que o o Math.random retorna valores abaixo de 1)
	const randomPerson = names[randomPersonPosition]; // randomPerson vai receber o resultado da inserção de randomPersonPosition(que contem a posição aleátoria) na array de names.

	return randomPerson + " is going to buy lunch today!";
    
}

alert(whosPaying (["Angela","Ben","Jenny","Michael","Chloe"]));

/************** CHALLENGE 15 **************/
// Fibonnacci Generator

function fibonnacciGenerator(n) {

    let output = [];
    if (n === 1){
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else {
        output =  [0, 1];
        // output =  [0, 1, 1, 2];
        for (var i = 2; i < n; i++){ // n é utilizado para determinar o tamanho da array output que retorna fibonnacci
        // explicando o código abaixo: ele pega o tamanho da array
        // subtrai o tamanho da array por -2 e -1
        // o resultado da operação output.length -2 e -1 vai ser utilizado para consultar a posição e 
        // substituir o valor em output.length pelo valor consultado
        // por fim esse valor será somado e inserido com push na array output
        output.push(output [output.length - 2] + output [output.length - 1]); // push vai inserir o resultado da soma das arrays em output     
        // length conta o tamanho da array 
        }
    }
    return output;
}

let n = prompt("Write a value: ")

alert(fibonnacciGenerator(n));
