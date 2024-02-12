function purchaseBook(bookTitle, author, price, discountPercentage, taxPercentage, stock, amountPurchased, creditDurationMonths) {
    let remainingStock = stock;

    const credit = [];

    for (let i = 1; i <= amountPurchased; i++) {
        if (remainingStock === 0) {
            console.log("Sorry, the book is out of stock.");
            break;
        }

        const discountFactor = discountPercentage / 100;
        const taxFactor = taxPercentage / 100;

        const discountAmount = price * discountFactor;
        const priceAfterDiscount = price - discountAmount;
        const taxAmount = priceAfterDiscount * taxFactor;
        const priceAfterTax = priceAfterDiscount + taxAmount;


        console.log(`\nPurchase ${i} - Book Title: ${bookTitle}`);
        console.log("Author:", author);
        console.log("Original Price: Rp.", price);
        console.log("Discount Percentage: ", discountPercentage, "%");
        console.log("Tax Percentage: ", taxPercentage, "%");
        console.log("Amount of Discount: Rp.", discountAmount);
        console.log("Price After Discount: Rp.", priceAfterDiscount);
        console.log("Amount of Tax: Rp.", taxAmount);
        console.log("Total Price: Rp.", priceAfterTax);

        remainingStock--;

        if (remainingStock === 0) {
            console.log("Sorry, the book is now out of stock.");
            break;
        }
    }

    if (remainingStock > 0) {
        console.log(`\nThere are ${remainingStock} more copies available for purchase.`);
    } else {
        console.log("\nThe book is currently out of stock. Please check back later.");
    }
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const now = new Date();
    let currentDay = now.getDate()

    for (let i = 1; i <= creditDurationMonths; i++) {

        credit.push(`Month ${i}: Due on ${month[now.getMonth() + i]} / ${currentDay}`);
    }
    console.log("\nBook Credit Details:");
    console.log(credit);
}

// Example usage
purchaseBook("Kalkulus", "Purcel", 50000, 10, 8, 5, 3, 5);
