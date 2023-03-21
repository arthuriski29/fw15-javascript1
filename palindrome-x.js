function isPalindrome(text) {
  if (typeof text !== "string") {
    return "Input must be a string";
  } else {
    let isPalindrome = true;
    for (let i = 0; i < text.length / 2; i++) {
      if (text[i] !== text[text.length - i - 1]) {
        isPalindrome = false;
        break;
      }
    }
    return isPalindrome;
  }
}
console.log(isPalindrome("malam"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("Fazztrack"));
console.log(isPalindrome(245));