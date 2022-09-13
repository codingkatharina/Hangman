const constants = require('./constants');
// In node.js: install a prompt library by running: `npm install prompt-sync` in the current folder
const prompt = require("prompt-sync")();

// Here you see an example how to get your
// constants from constants.js
/*for(let figure of constants.HANGMAN_PICS)
{
   console.log(figure);
}
*/
let Answer = [];



var Words = constants.WORDS_TO_GUESS[Math.floor(Math.random()*constants.WORDS_TO_GUESS.length)];


/*console.log(Words.length);                 //Wortlänge von random Word
*/



for(let i=0; i < Words.length; i++) {
   Answer[i]="_";
}

console.log(Answer.join(" "));

for(;Answer!==Words;) {

input = prompt (`Finde das Wort.`);

if(Words.includes(input)) {
   for(let i=0; i < Words.length; i++) {
   if (Words[i]===input) {
   Answer[i]=input;
} 
}

console.log(Answer.join(" "));


}else if(!Words.includes(input)){
   console.log("Falsche Eingabe - keep trying!");
   console.log(Answer.join(" "))
}

}





// how to use the prompt - e.g.:
// const name = prompt('What is your name?');