var inquirer = require("inquirer");
var Word = require("./word.js"); 
 
  var gameStarted =false;

   
  var dashes ="";
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


  //word list array was here

    
    var gameData = {
      wins: 0,
      losses: 0,
      guesses: 12,
      answerArray: [],
      computerGuess: "",
      userGuesses: [],
      userGuess: "",

      StartGame: function ()
      {
        Inquiring(); //run once at start
        gameData.setGUI();
        gameStarted=true;

      },

      restartGame: function ()
      {
        gameData.guesses = 12;
        gameData.answerArray =[];
        pickWord();
        for (var i = 0; i < gameData.computerGuess.length; i++) 
          {
            gameData.answerArray[i] = "_";    
          };
          dashes =gameData.answerArray.join(" ");
        gameData.userGuesses = [];
        gameData.userGuess = "";
        this.setGUI();
      },
       setGUI: function()
      {
        
      },
     
    };///end of game object
    
    pickWord();
    // console.log(gameData.computerGuess);
    
    for (var i = 0; i < gameData.computerGuess.length; i++) 
      {
        gameData.answerArray[i] = "_";    
      };
      dashes =gameData.answerArray.join(" ");
      console.log(dashes);

   
    /////////////////////magic starts here
  function CheckLetter() {
    var newWord = new Word();
    // var letterZ=newWord =new Letter();
    // console.log(newWord.GameWon)
   if(!gameStarted)return;
  //  console.log(gameData.userGuess)
      if(alphabet.indexOf(gameData.userGuess.toLowerCase())>=0)//if index is -1 it't not in the alphabet array and thus not a letter.
      {
        // var newWord = new Word();
        // if(gameData.userGuesses.indexOf(gameData.userGuess)<0) //if index is -1 it hasn't been guessed yet and is a vaild guess
        // {
        //   //gameData.userGuesses.push(gameData.userGuess);
          
        //   newWord.checkLetter(gameData.userGuess);
          

        // }
        newWord.checkLetter(gameData.userGuess);
        // gameData.setGUI();
        
      if(gameData.guesses<1)
      {
        gameData.losses++;
       // gameData.restartGame();
       console.log("You lost! I picked: " + computerGuess );
        
      }
    }
    
  }
  
  function pickWord()
  {
    var newWord = new Word();
    newWord.pickWord();
      for (var i = 0; i < newWord.length; i++) 
      {
        gameData.answerArray[i] = "_";    
      };
    console.log( gameData.answerArray.join(" "));
    gameData.computerGuess=newWord.word;
  }
  
  gameData.StartGame();
function Inquiring()
  {
    var newWord = new Word();
    if(newWord.GameWon)return;
    inquirer.prompt([
    {
      type: "input",
      name: "letter",
      message: "Pick a letter"
    }
  ]).then(function(user) {

    
   
    gameData.userGuess=user.letter;
    CheckLetter();
    var newWord = new Word();
    var gameWon=newWord.GameWon;
    if(gameWon)return;
    if(!newWord.GameWon)
    {
        // console.log("Guesses");
        // console.log(gameData.userGuesses.join(" "));
        // console.log("_____________________");
  }

    if(gameData.answerArray.join("") === gameData.computerGuess)return;

    Inquiring();
  });
}
