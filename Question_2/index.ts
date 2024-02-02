const isPalindrome = (str: string): boolean => {
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== str.charAt(str.length - (i + 1))) {
      return false;
    }
  }
  return true;
};

console.log("Is String Palindrome: ", isPalindrome("madam"));
