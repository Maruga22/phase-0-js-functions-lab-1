function calculateTax(amount) {
    return Number(amount) * 0.10;
}

function convertToUpperCase(text) {
    return String(text).toUpperCase();
}

function findMaximum(num1, num2) {
    return Number(num1) > Number(num2) ? Number(num1) : Number(num2);
}

function isPalindrome(word) {
    let w = String(word).toLowerCase().replace(/\s/g,'');
    return w === w.split('').reverse().join('');
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let price = Number(originalPrice);
    return price - (price * (Number(discountPercentage)/100));
}