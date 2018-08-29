var answerArray=[];
var dashes ="";
var currentWord="";
var Letter= function(letter)
{
    this.GameWon = false;
    this.checkLetter = function(word, letter)
    {
        currentWord=word;
        // console.log(word +" [in letter.js] "+letter)
        var isCorrect = false;
        for(var i=0;i<word.length; i++)
        {
            if(letter==word[i]){
                isCorrect=true;
                // console.log(letter+" is in the word");
                answerArray[i]=letter;
                var finalAnswer = answerArray.join("");
                if(finalAnswer==word)
                {
                    finalAnswer=finalAnswer.toUpperCase();
                    this.GameWon = true;
                    console.log("_____________________\n");
                    console.log("'"+finalAnswer+ "' is correct!\nWinner! Winner! Chicken Dinner!");
                    return;
                }
                else this.GameWon = false;
            }
           else {
               if(answerArray[i]==null)
               answerArray[i]="_ ";
            }
        }
        console.log(answerArray.join(" "));

   
          
        }
   
}

  module.exports = Letter;

