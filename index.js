// Function 1: calculateTax
function calculateTax(amount) {
    return amount * 0.10;
}

// Function 2: convertToUpperCase
function convertToUpperCase(text) {
    return text.toUpperCase();
}

// Function 3: findMaximum
function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// Function 4: isPalindrome (IMPORTANT: ignore case)
function isPalindrome(word) {
    let lowerWord = word.toLowerCase();
    let reversedWord = lowerWord.split('').reverse().join('');
    return lowerWord === reversedWord;
}

// Function 5: calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice - (originalPrice * (discountPercentage / 100));
}