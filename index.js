function purchaseBook(bookTitle, author, price, discountPercentage, taxPercentage) {
    const discountFactor = discountPercentage / 100;
    const taxFactor = taxPercentage / 100;

    const discountAmount = price * discountFactor;

    const priceAfterDiscount = price - discountAmount;

    const taxAmount = priceAfterDiscount * taxFactor;

    const priceAfterTax = priceAfterDiscount + taxAmount;

    console.log("Book Title:", bookTitle);
    console.log("Author:", author);
    console.log("Original Price: Rp.", price);
    console.log("Discount Percentage: ", discountPercentage, "%");
    console.log("Tax Percentage: ", taxPercentage, "%");
    console.log("\nBook Price Details:");
    console.log("Amount of Discount: Rp.", discountAmount);
    console.log("Price After Discount: Rp.", priceAfterDiscount);
    console.log("Amount of Tax: Rp.", taxAmount);
    console.log("Total Price: Rp.", priceAfterTax);
}

purchaseBook("Kalkulus", "Purcel", 50000, 10, 8);