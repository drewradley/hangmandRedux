var answerArray=[];
var dashes ="";
var currentWord="";

var Letter= function(letter)
{
    if(this.GameWon)return;
    this.letter=letter;
    this.picked =false;
    this.GameWon=false;
    this.inWord=false;
    this.checkLetter = function(word, letter)
    {
        if(this.GameWon)return;
        this.letter=letter;
        currentWord=word;
        this.picked=true;
        this.inWord=false;
        // console.log(word +" [in letter.js] "+letter)
        var isCorrect = false;
        for(var i=0;i<word.length; i++)
        {
            if(letter==word[i]){
                isCorrect=true;
                this.inWord=true;
                // console.log(letter+" is in the word");
                answerArray[i]=letter;
                var finalAnswer = answerArray.join("");
                if(finalAnswer==word)
                {
                    // finalAnswer=finalAnswer.toUpperCase();
                    this.GameWon = true;
                    console.log("_____________________\n");
                    console.log("'"+finalAnswer.toUpperCase()+ "' is correct!\nWinner! Winner! Chicken Dinner!");
                    return;
                }
                //else this.GameWon = false;
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

