function calculateTax(amount) {
  return amount * 0.10;
}
function convertToUpperCase(text) {
  return text.toUpperCase();
}
function findMaximum(num1, num2) {
  return Math.max(num1, num2);
}
function isPalindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word.toLowerCase() === reversed.toLowerCase();
}
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount = originalPrice * (discountPercentage / 100);
  return originalPrice - discountAmount;
}

module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };