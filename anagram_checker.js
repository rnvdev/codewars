/*
  What is an anagram? Well, two words are anagrams of each other
  if they both contain the same letters. 
  For example:'abba' & 'baab' == true
*/

function anagrams(word, words) {

  let splitWords = words.split("");
  let splitWord = word.split("");
  //I used .sort() here, but it's not necessary, I just used it to train concatenated methods.
  let splitWord2 = splitWord.sort().
    map(x => splitWords.includes(x) ? true : false);
  //I used .sort() here, but it's not necessary, I just used it to train concatenated methods.
  let splitWords2 = splitWords.sort().
    map(x => splitWord.includes(x) ? true : false);

  if (splitWord.length === splitWords.length) {
    if (splitWord2.includes(false) || 
        splitWords2.includes(false)){
        return false
    } 
  } else {
      return false;
  }
  return true;
}

anagrams('abba', 'baab');    //true
anagrams('abba', 'bbaa');    //true
anagrams('abba', 'abbba');   //false
anagrams('abba', 'abca');    //false
anagrams('ccca', 'axss');    //false
anagrams('ccca', 'accc');     //true
