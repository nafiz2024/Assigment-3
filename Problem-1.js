function newPrice(currentPrice, discount) {
     if (typeof currentPrice !== "number" || typeof discount !== "number") {
        return "Invalid"
    }

    if (discount < 0 || discount > 100) {
        return "Invalid"
    }

    let discountedPrice = (currentPrice * discount) / 100;
    let newPrice = currentPrice - discountedPrice;
    return newPrice.toFixed(3);
}

let finalPrice = newPrice(1500, 20);
console.log(finalPrice); 