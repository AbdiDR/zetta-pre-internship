const bookDetails = {
    title: 'Kalkulus',
    author: 'Purcel',
    price: 50000,
    stock: 3,
};

function purchaseBook(bookDetails, discountPercentage, taxPercentage, amountPurchased, creditDurationMonths) {

    const { title, author, price, stock } = bookDetails
    let remainingStock = stock;
    const credit = [];
    const purchases = []
    if(stock < amountPurchased){
        return console.log(`insufficient stock, there are only ${stock}`);
    }
    console.log(`Purchased ${amountPurchased} Books`)
    for (let i = 1; i <= amountPurchased; i++) {

        const discountFactor = discountPercentage / 100;
        const taxFactor = taxPercentage / 100;

        const discountAmount = price * discountFactor;
        const priceAfterDiscount = price - discountAmount;
        const taxAmount = priceAfterDiscount * taxFactor;
        const priceAfterTax = priceAfterDiscount + taxAmount;

        purchaseDetails = {
            number : i,
            title: title,
            author: author,
            discount: discountPercentage,
            tax: taxPercentage,
            afterDiscount: priceAfterDiscount,
            taxAmount: taxAmount,
            price: priceAfterTax 
        }

        purchases.push(purchaseDetails);

        remainingStock--;
        
        if (remainingStock === 0) {
            console.log("Sorry, the book is out of stock.");
            break;
        }
    }



    let totalPrice = purchases.reduce((total, purchase) => total + purchase.price, 0);


    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const now = new Date();
    let currentDay = now.getDate()

    let creditPrice = totalPrice / creditDurationMonths;

    
    for (let i = 1; i <= creditDurationMonths; i++) {
        creditDetails = {
            month : i,
            dueTo : month[now.getMonth() + i] + "/" + currentDay,
            pricePerMonth : creditPrice
        }
        credit.push(creditDetails)
    }

    console.log(purchases)
    console.log("\nTotal Price for All Purchases: Rp.", totalPrice);
    console.log(`\nBook Credit for ${creditDurationMonths} month Details:`);
    console.log(credit)

    if (remainingStock > 0) {
        console.log(`\nThere are ${remainingStock} more copies available for purchase.`);
    } else {
        console.log("\nThe book is currently out of stock. Please check back later.");
    }
    /*let reCheck = credit.reduce((total, credit) => total + credit.pricePerMonth, 0);
    console.log(reCheck)
    */
}

// Example usage
purchaseBook(bookDetails, 10, 8, 3, 5);
