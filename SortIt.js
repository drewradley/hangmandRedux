var fruits = [];
fruits.sort();

for(var i=2;i<process.argv.length; i++)
  {
      if(!isNaN(process.argv[i]))
      fruits.push(parseInt(process.argv[i]))
    
  }

  myFunction();
function myFunction() {
    fruits.sort(function(a, b){return a-b});/// sort returns 1 for >; 0 for ==; -1 fpr <
    console.log(fruits)
    
}