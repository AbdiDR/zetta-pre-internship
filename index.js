var favoriteBook1 = "Kalkulus";
var favoriteBook2 = "Termodinamika";

//Task 1A
favoriteBook1 = "Matematika";

//Task 1B 
const favoriteBook = "Termodinamika";
//favoriteBook = "termodinamika is hard"

//Task 2
const bestBooks = "My current favorite books are " + favoriteBook + "," + favoriteBook1 + ", and " + favoriteBook2

//Output
console.log(bestBooks)

//day 5 task 1

if (favoriteBook1 === favoriteBook2) {
    console.log("true");
}else {
    console.log("false");
}

//day 5 task 2

var priceFavoriteBook1 = 55000;
var priceFavoriteBook2 = 40000;

var highestPrice = (priceFavoriteBook1 > priceFavoriteBook2) ? favoriteBook1 : favoriteBook2;

var averagePrice = (priceFavoriteBook1 + priceFavoriteBook2) / 2;

var priceCategory = (averagePrice > 50000) ? "Expensive" : "Cheap";

console.log("Highest : ", highestPrice);
console.log("Average : ", averagePrice);
console.log("Category : ", priceCategory);