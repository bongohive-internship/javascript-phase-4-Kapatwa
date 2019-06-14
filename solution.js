//Javascript Object To Hold Recipe
var recipe = {};
recipe.title = "Chips Mayaya";
recipe.servings = 2;
recipe.ingredients = ["Eggs","Potatoes","Salt","Cooking Oil","Black Pepper"];
console.log(recipe.title);
console.log("Serves:" + recipe.servings);
console.log("Ingredients:" + recipe.ingredients);

//Books You've Read Tracker
function createBook(title,author,read){
  var book = {};
  book.title = title;
  book.author = author;
  book.alreadyRead = read;
  return book;
}

function CheckLibrary(Library){
  var l = Library.length;
  var i;
  for(i=0; i<l; i++){
    var book = Library[i];
    if(book.alreadyRead==true){
      console.log("You already read '"+ book.title + "' by " + book.author);
    }else{
      console.log("You still need to read '"+ book.title + "' by " + book.author);
    }
  }
}
//Create Library
var myLibrary = [createBook("A History of Zambia","Andrew Roberts",true),createBook("Zambia. Fredrick","Richard Hall",false),createBook("Rich Dad Poor Dad","Robert Kiyosaki",true)];
//Check Library
CheckLibrary(myLibrary);
