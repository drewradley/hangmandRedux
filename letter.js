
var Letter= function(letter)
{
    this.letter=letter;
    this.guessed=false;
    this.SetLetters = function (letter)
    {
    //    console.log(letter.guessed+"LetterJS")
       if(letter.guessed)
       {
           return letter.letter;
       }
       else return "_";

        // * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    }
    this.CheckLetter = function (letter)
    {
        //?????????????? no idea
        // * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
      
    }

}
module.exports = Letter;