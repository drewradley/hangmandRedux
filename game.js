var inquirer = require("inquirer");
var Word = require("./word.js"); 
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var gameOver = false;
StartGame();
function StartGame()
{
    var word= new Word();
    pickWord();
    // console.log(word.computerChoices.length)
    function pickWord()
    {  
      var tempWord=word.computerChoices[Math.floor(Math.random() * word.computerChoices.length)];
      if(tempWord.length !==6)
      {
        pickWord();
        return;
      }
      // else console.log(tempWord);
      word.ReturnWord(tempWord);
      Inquiring();
    }
}
function Inquiring()
  {
    var word= new Word();
    inquirer.prompt([
      {
        type: "input",
        name: "letter",
        message: "Pick a letter"
      }
    ]).then(function(user) {
      // console.log(user.letter);
      if(alphabet.indexOf(user.letter.toLowerCase())>=0)
      {
        word.CheckLetterAgainstWord(user.letter);
        CheckGameOver();
      }
      else Inquiring();
    });
  }
function CheckGameOver()
{
  var word= new Word();
  if(word.gameOver)return;
  word.CheckGameOver();
  
  console.log(word.actualLetters.join(""));
  if(gameOver)return;
  Inquiring();
  
}