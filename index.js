var favoriteBook1 = "Kalkulus";
var favoriteBook2 = "Termodinamika";

//Task 1A
favoriteBook1 = "Matematika";

//Task 1B 
const favoriteBook = "Termodinamika";
//favoriteBook = "termodinamika is hard"

//Task 2
const currentYear = new Date().getFullYear();
const isReading = true;
const numberPages = 10;
const bestBooks = "My current favorite books are " + favoriteBook + "," + favoriteBook1 + ", and " + favoriteBook2 +
    ". I'm currently in the year " + currentYear + ", and it's " + isReading + " that I am reading. So far, I've read " + numberPages + " pages.";

//Output
console.log(bestBooks)