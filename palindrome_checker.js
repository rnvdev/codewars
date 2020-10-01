//Check if word is palindrome:

const checkPalindrome = (palindrome) => {
  console.log(
    palindrome.split("").reverse().join("") === palindrome 
    ? 'is palindrome' : "isn't palindrome");
}

checkPalindrome('salas'); // is palindrome
checkPalindrome('ala'); // is palindrome
checkPalindrome('sala'); // isn't palindrome
checkPalindrome('carro'); // isn't palindrome

