// khan acedemy's pseudocode

// If the string is made of no letters or just one letter, then it is a palindrome.
// Otherwise, compare the first and last letters of the string.
// If the first and last letters differ, then the string is not a palindrome.
// Otherwise, the first and last letters are the same. Strip them from the string,
// and determine whether the string that remains is a palindrome.
// Take the answer for this smaller string and use it as the answer for the original string.

// utils

const firstCharacter = (str) => str.slice(0, 1);
const lastCharacter = (str) => str.slice(-1);
const middleCharacters = (str) => str.slice(1, -1);

// main

const isStringPalindrome = (str) => {
  if (str.length <= 1) return true;
  if (firstCharacter(str) !== lastCharacter(str)) return false;
  return isStringPalindrome(middleCharacters(str));
}

// here two base cases used, there is a recursion with one base case, but with && operator in the recursive case
// refer to ownn fcc solution for this