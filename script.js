function isPalindrome(input) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the cleaned input
    const reversedInput = cleanedInput.split('').reverse().join('');
    
    // Check if the cleaned input and reversed input are the same
    return cleanedInput === reversedInput;
}

// Example usage
const userInput = 'A man, a plan, a canal, Panama!';
const isInputPalindrome = isPalindrome(userInput);
console.log(isInputPalindrome); // Output: true