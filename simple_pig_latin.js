/*
  Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
  Leave punctuation marks untouched. 
  Examples:
   pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
   pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
  let separate = str.split(" ");
  let newArray = [];
  let ignoreSymbols = ['!', '?', '.', '...', ',', ';', '/'];
  for (let i = 0; i < separate.length; i++) {
    if (ignoreSymbols.includes(separate[i])){
      newArray.push(separate[i]);
    } else {
      newArray.push(`${separate[i].slice(1)}${separate[i][0]}${'ay'}`);
    }
  }
  return newArray.join(" ");
}


pigIt('Pig latin is cool'); //'igPay atinlay siay oolcay'
pigIt('Hello world !');  //'elloHay orldway !'
